export interface Project {
  id: string;
  title: string;
  role: string;
  client: string;
  description: string;
  technologies: string[];
  date: string;
  team: string[];
  image: string;
  images?: string[];
  details: {
    context: string;
    responsibilities: string[];
    results: string;
    missions: string[]; // NOUVEAU - résumé des missions
  };
}

export interface PortfolioData {
  profile: {
    name: string;
    photo: string;
    title: string;
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
    title : "Ingénieur Informatique · Spécialiste Développement Web & Mobile",
    description: "Ingénieur informatique passionné, je transforme les besoins métier en solutions techniques performantes. Expert en développement web/mobile et en architecture logicielle, j'allie compétences techniques pointues et capacité à piloter des projets d'envergure.",
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
      client: "Groupe MANAO", // NOUVEAU
      image: "/images/projects/celavi-main.jpg", // NOUVEAU
      images: ["/images/projects/celavi-1.jpg", "/images/projects/celavi-2.jpg"], // NOUVEAU
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
        missions: [ // NOUVEAU
          "Architecture et conception de la base de données",
          "Développement des modules de gestion locative",
          "Mise en place du système d'authentification",
          "Déploiement et maintenance"
        ],
        results: "Plateforme livrée dans les délais avec amélioration de 80% de la productivité."
      }
    },
    {
      id: "2",
      title: "Application Mobile : Hdepenses",
      role: "Concepteur | Développeur",
       client: "Projet personnel", // AJOUTEZ
      image: "/images/projects/hdepenses-main.jpg", // AJOUTEZ
      images: ["/images/projects/hdepenses-1.jpg", "/images/projects/hdepenses-2.jpg"], // AJOUTEZ
      
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
        missions: [ // AJOUTEZ
          "Analyse des besoins et conception fonctionnelle",
          "Développement de l'interface utilisateur avec Flutter",
          "Implémentation de la gestion des données avec SQLite",
          "Développement du système de catégorisation automatique des dépenses",
          "Création de graphiques et statistiques de dépenses"
        ],
        results: "Application déployée avec 5000+ téléchargements en 2 mois."
      }
    },

    {
      id: "3",
      title: "Application Mobile : Hiraparti",
      role: "Concepteur | Développeur",
      client: "Client privé", // AJOUTEZ
      image: "/images/projects/hiraparti-main.jpg", // AJOUTEZ
      images: ["/images/projects/hiraparti-1.jpg", "/images/projects/hiraparti-2.jpg"], // AJOUTEZ
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
        missions: [ // AJOUTEZ
          "Conception de l'architecture technique",
          "Développement de l'interface utilisateur",
          "Implémentation du système d'invitations et RSVP",
          "Intégration de Firebase pour la synchronisation en temps réel",
          "Développement du système de partage de photos d'événements"
        ],
        results: "Application déployée avec 5000+ téléchargements en 2 mois."
      }
    },
    {
      id: "4",
      title: "Application web : RepairSoft",
      role: "Chef de Projet",
      client: "Groupe MANAO", // NOUVEAU
      image: "/images/projects/repairsoft-main.jpg", // NOUVEAU
      images: ["/images/projects/repairsoft-1.jpg", "/images/projects/repairsoft-2.jpg"], // NOUVEAU
      description: "Développement et maintenance d'une plateforme web pour la gestion de carrosserie.",
      technologies: ["CodeIgniter (PHP)", "Ajax", "MySQL", "Bootstrap", "jQuery"],
      date: "Juillet 2023 - Juin 2025",
      team: ["2 Techniciens d'assistance", "4 Développeurs", "1 Chef de projet"],
      details: {
        context: "Création d'une plateforme pour une entreprise locale souhaitant digitaliser ses ventes.",
        responsibilities: [
          "Coordination de l'équipe de développement",
          "Définition de l'architecture technique",
          "Gestion du planning et des sprints",
          "Relations avec le client"
        ],
        missions: [ // NOUVEAU
          "Architecture et conception de la base de données",
          "Développement des modules de gestion locative",
          "Mise en place du système d'authentification",
          "Déploiement et maintenance"
        ],
        results: "Plateforme livrée dans les délais avec amélioration de 80% de la productivité."
      }
    },
  ],
  stack: {
    languages: ["PHP", "JavaScript", "TypeScript", "Dart", "Python", "Java", "C/C#", "SQL"],
    technologies_frameworks: [
      "React", "Next.js", "Flutter", "Laravel", "Symfony", "Node.js"
    ],

    databases: ["MySQL", "PostgreSQL"],
    outils: ["Git", "Postman", "Jira", "dbeaver", "navicat", "Android Studio"],
    architecture_conception: ["Architecture logicielle", "Design Patterns", "API REST", "GraphQL", "Clean Code", "Clean Architecture"],
    gestion_pilotage_technique: ["Analyse des besoins", "Conception fonctionnelle", "Gestion d’équipe (développeurs)", "Méthodes Agile / Scrum", "Suivi et pilotage de projets"]
  }
};