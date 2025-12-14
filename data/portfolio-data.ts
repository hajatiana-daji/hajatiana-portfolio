export interface Project {
  id: string;
  title: string;
  type : string;
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
    title: "Ingénieur Informatique · Spécialiste Développement Web & Mobile",
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
      title: "Application Mobile - Hdepenses",
      type : "Mobile",
      role: "Concepteur | Développeur",
      client: "Projet personnel", // AJOUTEZ
      image: "/images/projects/accueil 1.png", // AJOUTEZ
      images: ["/images/projects/accueil 1.png", "/images/projects/accueil 2.png", "/images/projects/categorie 1.png"], // AJOUTEZ

      description: "Conception et réalisation d'une application mobile pour la gestion de dépenses mensuelles.",
      technologies: ["Flutter", "SqlLite", "MySQL", "Git"],
      date: "Oct 2025 - aujourd'hui",
      team: ["1 Développeur"],
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
        results: "Application en test Beta avec retours positifs des 10+ utilisateurs."
      }
    },
    {
      id: "2",
      title: "Application web",
      type : "Web",
      role: "Chef de Projet",
      client: "Groupe MANAO", // NOUVEAU
      image: "/images/projects/celavi-main.jpg", // NOUVEAU
      images: ["/images/projects/celavi-1.jpg", "/images/projects/celavi-2.jpg"], // NOUVEAU
      description: "Développement et maintenance d'une plateforme de gestion locative.",
      technologies: ["MySQL", "Bootstrap", "jQuery", "Git", "API REST", "CodeIgniter (PHP)", "Ajax"],
      date: "Juillet 2023 - Aujourd'hui",
      team: ["3 Développeurs", "1 Chef de projet", "1 Product Owner", "1 Scrum Master"],
      details: {
        context: "Mon arrivée dans une équipe existante pour piloter le projet et améliorer la plateforme.",
        missions: [
          "Coordination de l'équipe de développement",
          "Analyse technique et de la faisabilité des fonctionnalités",
          "Création tâches en fonction des besoins client",
          "Révision du code et assurance qualité",
          "Relations avec le client"
        ],
        responsibilities: [ // NOUVEAU
          "Architecture et conception de la base de données",
          "Développement des modules de gestion locative",
          "Mise en place du système d'authentification",
          "Déploiement et maintenance"
        ],
        results: "Plateforme utilisée par plus de 1500 utilisateurs - confiance accrue du client."
      }
    },
    {
      id: "3",
      title: "Application Mobile",
      type : "Mobile",
      role: "Concepteur | Développeur",
      client: "Client privé", // AJOUTEZ
      image: "/images/projects/hiraparti-main.jpg", // AJOUTEZ
      images: ["/images/projects/hiraparti-1.jpg", "/images/projects/hiraparti-2.jpg"], // AJOUTEZ
      description: "Conception et réalisation d'une application mobile pour les groupes de musique ou chorales .",
      technologies: ["Flutter", "SqlLite", "MySQL", "Git"],
      date: "Aout 2025 - Oct 2025",
      team: ["1 Concepteur | Développeur"],
      details: {
        context: "Une application mobile permetant aux utilisateurs de gérer, consulter et partager des partitions musicales de manière collaborative et sécurisée",
        responsibilities: [
          "Architecture et conception de l'application",
          "Développement de l'interface utilisateur",
          "Implémentation du système d'authentification",
          "Développement du système de partage de partitions"
        ],
        missions: [ // AJOUTEZ
          "Analyse des besoins et conception fonctionnelle",
          "Développement de l'interface utilisateur avec Flutter",
          "Implémentation de la gestion des données avec SQLite",
          "Création du système de partage sécurisé entre utilisateurs",
          "Tests et optimisation des performances"
        ],
        results: "Application utilisée par 40+ utilisateurs."
      }
    },
    {
      id: "4",
      title: "Application web",
      type : "Web",
      role: "Chef de Projet",
      client: "Groupe MANAO", // NOUVEAU
      image: "/images/projects/repairsoft-main.jpg", // NOUVEAU
      images: ["/images/projects/repairsoft-1.jpg", "/images/projects/repairsoft-2.jpg"], // NOUVEAU
      description: "Développement et maintenance d'une plateforme web pour la gestion de carrosserie.",
      technologies: ["MySQL", "Bootstrap", "jQuery", "Git", "API REST", "CodeIgniter (PHP)", "Ajax"],
      date: "Juillet 2023 - Juin 2025",
      team: ["2 Techniciens d'assistance", "4 Développeurs", "1 Chef de projet", "1 Product Owner", "1 Scrum Master"],
      details: {
        context: "Une grande plateforme de gestion de carrosserie pour les ateliers de réparation automobile. J'ai rejoint l'équipe en tant que chef de projet pour superviser le développement et la maintenance de la plateforme et surtout apporter des optimisations techniques (optimisation du code et base de données).",
        responsibilities: [
          "Coordination de l'équipe de développement",
          "Révision du code et assurance qualité",
          "Analyse base de données et optimisation des requêtes",
          "Responsable de la mise en production",
        ],
        missions: [
          "Analyse des besoins et conception fonctionnelle",
          "Maintenance évolutive et corrective de la plateforme : GED, gestion des devis et factures, suivi des réparations",
          "Optimisation des performances de la plateforme",
          "Mise en place de nouvelles fonctionnalités selon les demandes du client",
        ],
        results: "Plateforme stable et performante, utilisée par plus de 10 000 utilisateurs - satisfaction client améliorée."
      }
    },
    {
      id: "5",
      title: "Plateforme web LMNP",
      type : "Web",
      role: "Chef de Projet",
      client: "Client privé",
      image: "/images/projects/lmnp-main.jpg",
      images: [
        "/images/projects/lmnp-1.jpg",
        "/images/projects/lmnp-2.jpg"
      ],
      description: "Développement d’une plateforme web dédiée à la revente de biens en LMNP sous bail commercial.",
      technologies: ["CodeIgniter (PHP)", "Redis", "MySQL", "jQuery", "Bootstrap", "Ajax", "Git"],
      date: "Juillet 2023 - Aujourd'hui",
      team: ["2 Développeurs", "1 Chef de projet", "1 Product Owner", "1 Scrum Master"],
      details: {
        context: "Plateforme destinée à centraliser et automatiser la gestion de biens immobiliers LMNP pour des investisseurs.",
        responsibilities: [
          "Pilotage du projet et coordination de l’équipe",
          "Développement des fonctionnalités en fonction des besoins clients",
          "Suivi de la qualité et des performances"
        ],
        missions: [
          "Pilotage du projet de développement",
          "Analyse technique des besoins clients",
          "Maintenance évolutive et corrective"
        ],
        results: "Plateforme stable et performante, utilisée pour la gestion et la revente de biens LMNP avec plus de 500 utilisateurs actifs."
      }
    },
    {
      id: "6",
      title: "Application Mobile – Portail Salarié",
      type : "Mobile",
      role: "Développeur Mobile",
      client: "Client entreprise",
      image: "/images/projects/portail-salarie-main.jpg",
      images: [
        "/images/projects/portail-salarie-1.jpg",
        "/images/projects/portail-salarie-2.jpg"
      ],
      description: "Application mobile permettant aux salariés d’accéder à leurs informations RH en toute autonomie.",
      technologies: ["Flutter", "API REST", "MySQL", "Git"],
      date: "Avril 2022 - Octobre 2022",
      team: [
        "1 Développeur",
        "1 Designer",
        "2 Testeurs",
        "1 Product Owner"
      ],
      details: {
        context: "Digitalisation de l’accès aux informations RH pour les salariés via une application mobile sécurisée.",
        responsibilities: [
          "Développement de l’application mobile",
          "Intégration des API RH",
          "Collaboration avec le designer et le PO",
          "Correction des anomalies issues des phases de test"
        ],
        missions: [
          "Consultation des bulletins de paie mensuels",
          "Gestion et affichage des compteurs de congés",
          "Accès à la GED du salarié",
          "Affichage des informations personnelles et administratives",
          "Sécurisation des accès et des données"
        ],
        results: "Application déjà sur le playstore et adoptée par les collaborateurs de l’entreprise."
      }
    }
    , {
      id: "7",
      title: "Application Mobile GPMIL",
      type : "Mobile",
      role: "Concepteur | Développeur",
      client: "Projet institutionnel",
      image: "/images/projects/gpmil-main.jpg",
      images: [
        "/images/projects/gpmil-1.jpg",
        "/images/projects/gpmil-2.jpg"
      ],
      description: "Application mobile de gestion de personnel militaire (projet en cours).",
      technologies: ["Flutter", "SQLite", "MySQL", "Git"],
      date: "Novembre 2025 - Aujourd'hui",
      team: [
        "1 Concepteur | Développeur",
      ],
      details: {
        context: "Conception d’une application centralisant toutes les informations administratives et professionnelles du personnel militaire.",
        responsibilities: [
          "Conception globale de l’application",
          "Développement mobile",
          "Structuration des données métiers",
        ],
        missions: [
          "Conception et développement de l’application mobile avec Flutter",
          "Retour régulier au client pour validation des fonctionnalités",
        ],
        results: "Projet en cours de développement avec une base fonctionnelle stable."
      }
    }
    ,
    {
      id: "8",
      title: "Application web – Commande de robots de peinture",
      type : "Web",
      role: "Chef de Projet",
      client: "Client industriel",
      image: "/images/projects/robot-paint-main.jpg",
      images: [
        "/images/projects/robot-paint-1.jpg",
        "/images/projects/robot-paint-2.jpg"
      ],
      description: "Plateforme web permettant la gestion et le suivi des commandes de robots de peinture par pulvérisation.",
      technologies: ["CodeIgniter (PHP)", "MySQL", "Ajax", "Bootstrap", "jQuery"],
      date: "Mai 2025 - Aujourd'hui",
      team: [
        "1 Développeur",
        "1 Chef de projet",
        "1 Product Owner"
      ],
      details: {
        context: "Besoin d’un outil centralisé pour gérer les commandes, le suivi et la configuration de robots industriels.",
        responsibilities: [
          "Développement des fonctionnalités web",
          "Analyse technique des besoins",
          "Collaboration avec le chef de projet et le PO",
          "Maintenance et évolutions"
        ],
        missions: [
          "Piloter le projet de développement",
          "Conception de la base de données",
          "Chiffrage de développement à chaque nouvelle fonctionnalité",
          "Révision du code"
        ],
        results: "Application utilisée par le client, en phase de test sans retours négatifs à ce jour."
      }
    }

  ],
  stack: {
    languages: ["PHP", "JavaScript", "TypeScript", "Dart", "Python", "Java", "C/C#", "SQL"],
    technologies_frameworks: [
      "React", "Next.js", "Flutter", "Laravel", "CodeIgniter","Symfony", "Node.js"
    ],
    databases: ["MySQL", "PostgreSQL", "SQLite", "Redis", "SQL Server"],
    outils: ["Git", "Postman", "Jira", "dbeaver", "navicat", "Android Studio"],
    architecture_conception: ["Architecture logicielle", "Design Patterns", "API REST", "GraphQL", "Clean Code", "Clean Architecture"],
    gestion_pilotage_technique: ["Analyse des besoins", "Conception fonctionnelle", "Gestion d’équipe (développeurs)", "Méthodes Agile / Scrum", "Suivi et pilotage de projets"]
  }
};