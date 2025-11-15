export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  technologies: string[];
  date: string;
  team: string[];
  details: {
    context: string;
    responsibilities: string[];
    results: string;
  };
}

export interface PortfolioData {
  profile: {
    name: string;
    photo: string;
    description: string;
    email: string;
    phone: string;
    facebook: string;
    github: string;
    linkedin: string;
  };
  projects: Project[];
  stack: {
    frontend: string[];
    backend: string[];
    database: string[];
    tools: string[];
    mobile: string[];
  };
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Hajatiana Danielson ANDRIANJAKA",
    photo: "/images/profile.jpg",
    description: "Développeur passionné et responsable technique, je conçois et développe des applications web et mobiles en alliant architecture, qualité du code et vision produit.",
    email: "arias.hajatiana@gmail.com",
    phone: "+261 34 65 511 71 | +261 33 63 511 71",
    facebook: "facebook.com/hajatiana.andrianjaka.2025",
    github: "github.com/hajatiana-daji",
    linkedin: "linkedin.com/in/hda04"
  },
  projects: [
    {
      id: "1",
      title: "E-commerce Platform",
      role: "Chef de Projet",
      description: "Développement d'une plateforme e-commerce complète avec gestion des stocks et paiements en ligne.",
      technologies: ["React", "Node.js", "MongoDB"],
      date: "Jan 2024 - Mars 2024",
      team: ["Designer UI/UX", "2 Développeurs", "1 Chef de projet"],
      details: {
        context: "Création d'une plateforme pour une entreprise locale souhaitant digitaliser ses ventes.",
        responsibilities: [
          "Coordination de l'équipe de développement",
          "Définition de l'architecture technique",
          "Gestion du planning et des sprints",
          "Relations avec le client"
        ],
        results: "Plateforme livrée dans les délais avec +150% d'augmentation des ventes en ligne."
      }
    },
    {
      id: "2",
      title: "Application Mobile Finance",
      role: "Développeur Full Stack",
      description: "Application de gestion financière personnelle avec dashboard analytique.",
      technologies: ["React Native", "Express", "PostgreSQL"],
      date: "Avr 2024 - Juin 2024",
      team: ["2 Développeurs", "1 Product Owner"],
      details: {
        context: "Développement d'une application mobile pour aider les utilisateurs à suivre leurs dépenses.",
        responsibilities: [
          "Développement de l'API REST",
          "Intégration des services de paiement",
          "Création des dashboards analytiques",
          "Tests et optimisation des performances"
        ],
        results: "Application déployée avec 5000+ téléchargements en 2 mois."
      }
    }
  ],
  stack: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    backend: ["Node.js", "Express", "NestJS", "Python", "Django"],
    database: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    tools: ["Git", "Docker", "AWS", "Vercel", "Figma"],
    mobile: ["React Native", "Flutter"]
  }
};