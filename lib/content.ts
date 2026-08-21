export type Service = {
  title: string;
  image: string;
  imagePosition?: string;
};

export const services: Service[] = [
  { title: "Impiantistica", image: "/images/services/impiantistica.jpg" },
  {
    title: "Progettazione civile",
    image: "/images/services/progettazione-civile.jpg",
    imagePosition: "center 55%",
  },
  {
    title: "Sicurezza e Consulenza",
    image: "/images/services/sicurezza-consulenza.jpg",
  },
  {
    title: "Opere Strategiche",
    image: "/images/services/opere-strategiche.jpg",
    imagePosition: "center 58%",
  },
  { title: "Agroalimentare", image: "/images/services/agroalimentare.jpg" },
  { title: "Antincendio", image: "/images/services/antincendio.jpg" },
  { title: "Domotica", image: "/images/services/domotica.jpg" },
  { title: "Formazione", image: "/images/services/formazione.jpg" },
];

export const navItems = [
  { label: "Studio", href: "#studio" },
  { label: "Servizi", href: "#servizi" },
  { label: "BIM", href: "#bim" },
  { label: "Team", href: "#team" },
  { label: "News", href: "#news" },
  { label: "Contatti", href: "#contatti" },
];

export const menuItems = [
  { label: "Chi siamo", href: "#studio" },
  { label: "Servizi", href: "#servizi" },
  { label: "Team", href: "#team" },
  { label: "BIM", href: "#bim" },
  { label: "Verifiche", href: "#verifiche" },
  { label: "Formazione", href: "#formazione" },
  { label: "News", href: "#news" },
  { label: "Recruiting", href: "#recruiting" },
  { label: "Certificazioni", href: "#certificazioni" },
  { label: "Contatti", href: "#contatti" },
];

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  imagePosition?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Raffaele Schettino",
    role: "Ingegnere",
    image: "/images/team/transparent/raffaele-schettino.png",
  },
  {
    name: "Sonia Le Piane",
    role: "Frontoffice",
    image: "/images/team/transparent/sonia-le-piane.png",
  },
  {
    name: "Sara Rizzo",
    role: "Amministrazione",
    image: "/images/team/transparent/sara-rizzo.png",
  },
  {
    name: "Rossella Falcone",
    role: "Ingegnere",
    image: "/images/team/transparent/rossella-falcone.png",
  },
  {
    name: "Anna Zicarelli",
    role: "Ingegnere",
    image: "/images/team/transparent/anna-zicarelli.png",
  },
  {
    name: "Angela Natale",
    role: "BIM Disegnatore",
    image: "/images/team/transparent/angela-natale.png",
  },
  {
    name: "Maria Elena Pallota",
    role: "Architetto",
    image: "/images/team/transparent/maria-elena-pallota.png",
  },
  {
    name: "Pietro Libonati",
    role: "BIM Disegnatore",
    image: "/images/team/transparent/pietro-libonati.png",
  },
  {
    name: "Mariateresa Tursi",
    role: "Ingegnere",
    image: "/images/team/transparent/mariateresa-tursi.png",
  },
  {
    name: "Catia Esposito",
    role: "Ingegnere",
    image: "/images/team/transparent/catia-esposito.png",
  },
  {
    name: "Giuseppe Nicolini",
    role: "Ingegnere",
    image: "/images/team/transparent/giuseppe-nicolini.png",
  },
  {
    name: "Massimiliano Colla",
    role: "Geometra",
    image: "/images/team/transparent/massimiliano-colla.png",
  },
  {
    name: "Salvatore Magno",
    role: "Ingegnere",
    image: "/images/team/transparent/salvatore-magno.png",
  },
];

export const newsItems = [
  {
    date: "04.02.2026",
    title: "Visita Cantiere SS106 – Roseto",
    excerpt:
      "Nell’ambito delle attività di approfondimento tecnico, le nostre ragazze e ragazzi hanno effettuato una visita al cantiere del Mega Lotto della nuova SS 106 in corrispondenza di Roseto Capo Spulico.",
    image: "/images/hero/ss106-roseto.jpg",
    href: "http://www.studioschettino.it/2026/02/11/visita-cantiere-ss106-roseto/",
  },
  {
    date: "31.12.2025",
    title: "Cena di Natale 2025",
    excerpt:
      "Con tutto il gruppo di ragazze e ragazzi della società e con le loro famiglie, ci si ferma qualche giorno prima delle festività natalizie per passare insieme una serata fuori dai pensieri e dalle scadenze di lavoro.",
    image: "/images/news/natale-2025.png",
    href: "http://www.studioschettino.it/2026/01/07/cena-di-natale-2025/",
  },
  {
    date: "15.11.2025",
    title: "Ispezioni Gallerie Rete ANAS Calabria",
    excerpt:
      "Anche quest’anno siamo stati parte operativa della società Erregi Artelia spa nell’ispezione delle gallerie per la rete stradale statale ANAS Calabria.",
    image: "/images/news/gallerie-anas.png",
    href: "http://www.studioschettino.it/2026/01/07/ispezioni-gallerie-rete-anas-calabria/",
  },
];

export const certifications = [
  "ISO 9001",
  "ISO 45001",
  "ISO 14001",
  "UNI/PdR 125",
  "PdR 74:2019",
];

export const realNumbers = [
  { value: 17, suffix: "", label: "Anni di progettazione" },
  { value: 2150, suffix: "", label: "Ore di formazione" },
  { value: 385, suffix: "", label: "Commesse portate a termine" },
];
