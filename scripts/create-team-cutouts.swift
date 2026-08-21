import AppKit
import CoreImage
import CoreImage.CIFilterBuiltins
import Foundation
import Vision

struct Portrait {
    let source: String
    let destination: String
    let alreadyTransparent: Bool
}

let portraits = [
    Portrait(source: "raffaele-schettino.png", destination: "raffaele-schettino.png", alreadyTransparent: true),
    Portrait(source: "sonia-le-piane.jpeg", destination: "sonia-le-piane.png", alreadyTransparent: false),
    Portrait(source: "sara-rizzo.jpeg", destination: "sara-rizzo.png", alreadyTransparent: false),
    Portrait(source: "rossella-falcone.jpeg", destination: "rossella-falcone.png", alreadyTransparent: false),
    Portrait(source: "anna-zicarelli.jpeg", destination: "anna-zicarelli.png", alreadyTransparent: false),
    Portrait(source: "angela-natale.jpeg", destination: "angela-natale.png", alreadyTransparent: false),
    Portrait(source: "maria-elena-pallota.jpeg", destination: "maria-elena-pallota.png", alreadyTransparent: false),
    Portrait(source: "pietro-libonati.jpeg", destination: "pietro-libonati.png", alreadyTransparent: false),
    Portrait(source: "mariateresa-tursi.jpg", destination: "mariateresa-tursi.png", alreadyTransparent: false),
    Portrait(source: "catia-esposito.jpeg", destination: "catia-esposito.png", alreadyTransparent: false),
    Portrait(source: "giuseppe-nicolini.jpeg", destination: "giuseppe-nicolini.png", alreadyTransparent: false),
    Portrait(source: "massimiliano-colla.jpeg", destination: "massimiliano-colla.png", alreadyTransparent: false),
    Portrait(source: "salvatore-magno.jpeg", destination: "salvatore-magno.png", alreadyTransparent: false),
]

let fileManager = FileManager.default
let projectRoot = URL(fileURLWithPath: fileManager.currentDirectoryPath, isDirectory: true)
let sourceDirectory = projectRoot.appendingPathComponent("public/images/team", isDirectory: true)
let destinationDirectory = sourceDirectory.appendingPathComponent("transparent", isDirectory: true)
try fileManager.createDirectory(at: destinationDirectory, withIntermediateDirectories: true)

let context = CIContext(options: [.cacheIntermediates: false])
guard let colorSpace = CGColorSpace(name: CGColorSpace.sRGB) else {
    fatalError("Unable to create sRGB color space")
}

for portrait in portraits {
    let sourceURL = sourceDirectory.appendingPathComponent(portrait.source)
    let destinationURL = destinationDirectory.appendingPathComponent(portrait.destination)

    if fileManager.fileExists(atPath: destinationURL.path) {
        try fileManager.removeItem(at: destinationURL)
    }

    if portrait.alreadyTransparent {
        try fileManager.copyItem(at: sourceURL, to: destinationURL)
        print("Copied existing alpha: \(portrait.destination)")
        continue
    }

    guard let sourceImage = CIImage(
        contentsOf: sourceURL,
        options: [.applyOrientationProperty: true]
    ) else {
        fatalError("Unable to read \(portrait.source)")
    }

    let request = VNGeneratePersonSegmentationRequest()
    request.qualityLevel = .accurate
    request.outputPixelFormat = kCVPixelFormatType_OneComponent8
    let handler = VNImageRequestHandler(ciImage: sourceImage, options: [:])
    try handler.perform([request])

    guard let observation = request.results?.first else {
        fatalError("No person mask generated for \(portrait.source)")
    }

    let rawMask = CIImage(cvPixelBuffer: observation.pixelBuffer)
    let scale = CGAffineTransform(
        scaleX: sourceImage.extent.width / rawMask.extent.width,
        y: sourceImage.extent.height / rawMask.extent.height
    )
    let scaledMask = rawMask
        .transformed(by: scale)
        .cropped(to: sourceImage.extent)

    let refine = CIFilter.colorControls()
    refine.inputImage = scaledMask
    refine.saturation = 0
    refine.contrast = 1.35
    refine.brightness = -0.12
    let mask = (refine.outputImage ?? scaledMask).cropped(to: sourceImage.extent)

    let transparent = CIImage(color: .clear).cropped(to: sourceImage.extent)
    let blend = CIFilter.blendWithMask()
    blend.inputImage = sourceImage
    blend.backgroundImage = transparent
    blend.maskImage = mask

    guard let output = blend.outputImage?.cropped(to: sourceImage.extent) else {
        fatalError("Unable to composite \(portrait.source)")
    }

    try context.writePNGRepresentation(
        of: output,
        to: destinationURL,
        format: .RGBA8,
        colorSpace: colorSpace,
        options: [:]
    )
    print("Created cutout: \(portrait.destination)")
}
