import { Award, Code2 as Code, Lightbulb, Mail, Phone, Rocket, Target, TrendingUp, Users } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  type: string;
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
  characteristics: { title: string; description: string; icon: any; color: string }[];
  motivations: { title: string; description: string; icon: any; color: string; bg: string }[];
  experiences: { title: string; company: string; date: string; description: string; color: string; skills: string[] }[];
  education: { degree: string; school: string; date: string; description: string; color: string }[];
  contacts: { type: 'email' | 'phone'; value: string; icon: any }[];
  profileExtra?: {
    available?: boolean;
    parcours?: string[];
    ctaText?: string;
  }

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
      type: "Mobile",
      role: "Concepteur | Développeur",
      client: "Projet personnel", // AJOUTEZ
      image: "/images/projects/accueil 1.png", // AJOUTEZ
      images: ["/images/projects/accueil 1.png", "/images/projects/accueil 2.png", "/images/projects/categorie 1.png"], // AJOUTEZ

      description: "Conception et réalisation d'une application mobile pour la gestion de dépenses mensuelles.",
      technologies: ["Flutter", "SqlLite", "MySQL", "Git"],
      date: "Oct 2025 - aujourd'hui",
      team: ["Concepteur | Développeur"],
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
      title: "Application web - CLV Gestion",
      type: "Web",
      role: "Chef de Projet",
      client: "Groupe MANAO", // NOUVEAU
      image: "/images/projects/celavi-main.jpg", // NOUVEAU
      images: ["/images/projects/celavi-1.jpg", "/images/projects/celavi-2.jpg"], // NOUVEAU
      description: "Développement et maintenance d'une plateforme de gestion locative.",
      technologies: ["MySQL", "Bootstrap", "jQuery", "Git", "API REST", "CodeIgniter (PHP)", "Ajax"],
      date: "Juillet 2023 - Aujourd'hui",
      team: ["Développeur fullstack 1","Développeur fullstack 2", "Chef de projet", "Product Owner", "Scrum Master"],
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
      title: "Application Mobile - HPARTI",
      type: "Mobile",
      role: "Concepteur | Développeur",
      client: "Client privé", // AJOUTEZ
      image: "/images/projects/hiraparti-main.jpg", // AJOUTEZ
      images: ["/images/projects/hiraparti-1.jpg", "/images/projects/hiraparti-2.jpg"], // AJOUTEZ
      description: "Conception et réalisation d'une application mobile pour les groupes de musique ou chorales .",
      technologies: ["Flutter", "SqlLite", "MySQL", "Git"],
      date: "Aout 2025 - Oct 2025",
      team: ["Concepteur | Développeur"],
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
      title: "Application web - RSOFT",
      type: "Web",
      role: "Chef de Projet",
      client: "Groupe MANAO", // NOUVEAU
      image: "/images/projects/repairsoft-main.jpg", // NOUVEAU
      images: ["/images/projects/repairsoft-1.jpg", "/images/projects/repairsoft-2.jpg"], // NOUVEAU
      description: "Développement et maintenance d'une plateforme web pour la gestion de carrosserie.",
      technologies: ["MySQL", "Bootstrap", "jQuery", "Git", "API REST", "CodeIgniter (PHP)", "Ajax"],
      date: "Juillet 2023 - Juin 2025",
      team: ["Technicien d'assistance 1", "Technicien d'assistance 2","Développeur Fullstack 1","Développeur Fullstack 2","Développeur Fullstack 3","Développeur Fullstack 4", "Chef de projet", "Product Owner", "Scrum Master"],
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
      title: "Plateforme web - CLV LMNP",
      type: "Web",
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
      team: ["Développeur FullStack 1","Développeur FullStack 2", "Chef de projet", "Product Owner", "Scrum Master"],
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
      type: "Mobile",
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
        "Développeur Mobile","Développeur Backend","Designer","Testeur 1","Testeur 1","Product Owner"
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
      type: "Mobile",
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
        "Concepteur | Développeur",
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
      title: "Application web – PaintGo",
      type: "Web",
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
        "Développeur",
        "Chef de projet",
        "Product Owner"
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
      "React", "Next.js", "Flutter", "Laravel", "CodeIgniter", "Symfony", "Node.js"
    ],
    databases: ["MySQL", "PostgreSQL", "SQLite", "Redis", "SQL Server"],
    outils: ["Git", "Postman", "Jira", "dbeaver", "navicat", "Android Studio"],
    architecture_conception: ["Architecture logicielle", "Design Patterns", "API REST", "GraphQL", "Clean Code", "Clean Architecture"],
    gestion_pilotage_technique: ["Analyse des besoins", "Conception fonctionnelle", "Gestion d’équipe (développeurs)", "Méthodes Agile / Scrum", "Suivi et pilotage de projets"]
  },
  profileExtra: {
    available: true,
    parcours: [
      "Plusieurs années d'expérience en développement web et mobile.", // ok
      "Expertise en architecture logicielle et clean code.",
      "Accompagnement complet des projets, de la conception à la livraison."
    ],
    ctaText: "Je suis ouvert à de nouvelles opportunités professionnelles et collaborations sur des projets passionnants."
  },
  characteristics: [
    { title: "Excellence technique", description: "Maîtrise approfondie des technologies modernes et clean code.", icon: Code, color: "blue" },
    { title: "Leadership technique", description: "Capacité à piloter des équipes et garantir les objectifs.", icon: Users, color: "green" },
    { title: "Vision produit", description: "Compréhension des besoins métier et traduction en solutions techniques.", icon: Target, color: "purple" },
    { title: "Innovation continue", description: "Veille technologique constante et intégration des meilleures pratiques.", icon: Lightbulb, color: "orange" },
  ],
  motivations: [
    { title: "Créer des solutions impactantes", description: "Développer des applications qui améliorent le quotidien des utilisateurs.", icon: Rocket, color: "blue", bg: "blue" },
    { title: "Progresser continuellement", description: "Apprendre de nouvelles technologies et relever des défis techniques stimulants.", icon: TrendingUp, color: "green", bg: "green" },
    { title: "Travailler en équipe", description: "Collaborer avec des profils variés et partager mes connaissances.", icon: Users, color: "purple", bg: "purple" },
    { title: "Viser l'excellence", description: "Produire du code de qualité et livrer des projets dont je suis fier.", icon: Award, color: "orange", bg: "orange" },
  ],
  experiences: [
    {
      title: "Chef d’équipe",
      company: "Manao Logiciels",
      date: "Oct. 2025 - Aujourd'hui",
      description: "En tant que Chef d’équipe pour 9 projets d'un client, impliquant deux développeurs et un testeur : garantir la qualité des livrables, coordonner l’équipe, participer aux réunions hebdomadaires avec le client.",
      skills: ["JIRA", "Leadership d’équipe", "Sens de l’organisation", "Méthodes agiles"],
      color: "blue"
    },
    {
      title: "Chef de projet",
      company: "Manao Logiciels",
      date: "Juil. 2023 - Aujourd'hui",
      description: "Gestion de trois applications web avec une équipe de deux développeurs : analyse des demandes, suivi de l’avancement, revue de code, supervision des mises en production et résolution des tâches critiques.",
      skills: ["MySQL", "CodeIgniter", "Next.js", "Gestion de projet agile", "jQuery", "AJAX", "Git", "API REST", "Node.js", "Conception de logiciels"],
      color: "green"
    },
    {
      title: "Chef de projet",
      company: "Manao Logiciels",
      date: "Juil. 2023 - Mars 2025",
      description: "Gestion d'une plateforme web pour les métiers du corrisier : communication avec le client, supervision de la maintenance et des nouvelles fonctionnalités, optimisation du code et encadrement d’une équipe de 6 personnes.",
      skills: ["Gestion de projet agile", "Git", "Clean code", "Conception de bases de données", "API REST", "Gestion des priorités"],
      color: "purple"
    },
    {
      title: "Responsable technique de l’AO et l’AMI",
      company: "Manao Logiciels",
      date: "Mai 2023 - Déc. 2023",
      description: "Collaboration avec les équipes internes pour les appels d’offres et manifestations d’intérêt : rédaction des documents techniques, évaluation des soumissions et reporting à la direction.",
      skills: ["Gestion de projet agile", "Git", "Développement de logiciels", "Conception de logiciels"],
      color: "orange"
    },
    {
      title: "Responsable de projets",
      company: "Manao Logiciels",
      date: "Avr. 2023 - Juil. 2023",
      description: "Coordination des projets Gestion, Commercial-Ventes et Communication : encadrement des équipes, formation, gestion des demandes d’évolution fonctionnelle et suivi régulier des projets.",
      skills: ["Développement d’applications mobiles", "Gestion de projet agile", "Git", "Développement de logiciels", "Conception de logiciels"],
      color: "teal"
    },
    {
      title: "Développeur web et mobile",
      company: "Manao Logiciels",
      date: "Oct. 2022 - Avr. 2023",
      description: "Développement et maintenance de plusieurs applications Web et mobile, dont PAIE France, Paie Mada et l’application mobile 'Bulletins'.",
      skills: ["PHP", "Développement d’applications mobiles", "Git", "JavaScript", "Développement de logiciels", "Flutter", "Conception de logiciels"],
      color: "red"
    },
    {
      title: "Stagiaire développeur",
      company: "Manao Logiciels / ENI Fianarantsoa",
      date: "Avr. 2022 - Oct. 2022",
      description: "Préparation du mémoire de fin d’études et développement de l’application mobile 'Bulletins', disponible sur le Play Store.",
      skills: ["PHP", "MySQL", "CodeIgniter", "Git", "Développement de logiciels", "Dart", "Flutter"],
      color: "gray"
    }
  ],
  education: [
    { degree: "Master Professionnel en Informatique", school: "École Nationale d'Informatique (ENI)", date: "2020 - 2022", description: "Formation approfondie en génie logiciel et développement d'applications.", color: "blue" },
    { degree: "Licence Professionnelle en Informatique", school: "École Nationale d'Informatique (ENI)", date: "2017 - 2020", description: "Bases solides en développement web et mobile.", color: "green" },
    { degree: "Baccalauréat Série D (Sciences expérimentales)", school: "Lycée Ambatofinandrahana", date: "2013 - 2016", description: "Spécialisation en mathématiques, physique, chimie et sciences de la vie.", color: "purple" },
  ],
  contacts: [
    { type: "email", value: "hajatiana@example.com", icon: Mail },
    { type: "phone", value: "+261 34 12 345 67", icon: Phone },
  ],
};