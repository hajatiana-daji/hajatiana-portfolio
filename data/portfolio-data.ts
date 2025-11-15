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
    languages: string[];
    technologies_frameworks: string[];
    databases: string[];
    outils: string[];
    architecture_conception: string[];
    gestion_pilotage_technique: string[];
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
      title: "Application web : CELAVI Gestion",
      role: "Chef de Projet",
      description: "Développement et maintenance d'une plateforme de gestion locative.",
      technologies: ["CodeIgniter (PHP)", "Ajax", "MySQL", "Bootstrap", "jQuery"],
      date: "Juillet 2023 - Aujourd'hui",
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
      title: "Application Mobile : Hdepenses",
      role: "Concepteur | Développeur",
      description: "Conception et réalisation d'une application mobile pour la gestion de dépenses mensuelles.",
      technologies: ["Flutter", "SqlLite", "MySQL"],
      date: "Oct 2025 - aujourd'hui",
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
    },

    {
      id: "3",
      title: "Application Mobile : Hiraparti",
      role: "Concepteur | Développeur",
      description: "Conception et réalisation d'une application mobile pour la gestion de dépenses mensuelles.",
      technologies: ["Flutter", "SqlLite", "MySQL"],
      date: "Aout 2025 - Oct 2025",
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
    languages: ["PHP", "JavaScript", "TypeScript", "Dart", "Python", "Java", "C/C#", "SQL"],
technologies_frameworks: [
  "React", "Next.js", "Flutter", "Laravel", "Symfony", "Node.js"
],

    databases: ["MySQL", "PostgreSQL"],
    outils: ["Git",  "Postman","Jira", "dbeaver", "navicat", "Android Studio"],
    architecture_conception: ["Architecture logicielle", "Design Patterns", "API REST", "GraphQL", "Clean Code", "Clean Architecture"],
    gestion_pilotage_technique: ["Analyse des besoins", "Conception fonctionnelle", "Gestion d’équipe (développeurs)", "Méthodes Agile / Scrum", "Suivi et pilotage de projets"]
  }
};