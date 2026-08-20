import type { ExperienceEntry, EducationEntry } from "@/types";

export const experience: ExperienceEntry[] = [
  {
    id: "easy-ways-career",
    role: "Développeur Full-Stack & IA — Stage",
    organization: "Easy Ways Career",
    location: "Ariana, Tunisie",
    mode: "Remote",
    start: "Février 2025",
    end: "Mai 2025",
    summary:
      "Conception de NetGuard, un outil de sécurité réseau détectant en temps réel les trafics anormaux via un autoencodeur non supervisé.",
    highlights: [
      "Développé un autoencodeur (TensorFlow) pour l'analyse et la détection d'anomalies sur le trafic réseau",
      "Construit un tableau de bord Flask pour la visualisation des anomalies et indicateurs de sécurité",
      "Appliqué le pipeline ML complet : collecte, prétraitement, feature engineering, entraînement, évaluation, déploiement",
      "Collaboré en méthode agile à distance, livraison des jalons dans les délais sur 4 mois",
    ],
    stack: ["Python", "TensorFlow", "Flask", "Machine Learning"],
  },
  {
    id: "youth-activists",
    role: "Développeur Full-Stack — Stage",
    organization: "Youth Activists Organization",
    location: "Tunisie",
    mode: "Hybride",
    start: "Août 2024",
    end: "Août 2024",
    summary:
      "Conception et développement d'une plateforme web de gestion associative (membres, formations, événements).",
    highlights: [
      "Développé une application web complète avec React.js et Laravel",
      "Mis en place la gestion des membres, des formations et des événements",
      "Architecturé une API RESTful sécurisée avec Laravel Breeze (authentification, vérification email)",
    ],
    stack: ["React.js", "Laravel", "MySQL", "Laravel Breeze"],
  },
];

export const education: EducationEntry[] = [
  {
    id: "master-isik",
    degree: "Master professionnel en Applications Web Intelligentes",
    institution: "Institut Supérieur d'Informatique du Kef (ISI Kef)",
    period: "Septembre 2025 — présent",
    status: "in-progress",
  },
  {
    id: "licence-isik",
    degree: "Licence en Génie Logiciel et Systèmes d'Information",
    institution: "Institut Supérieur d'Informatique du Kef (ISI Kef)",
    period: "Septembre 2022 — Mai 2025",
    status: "completed",
  },
  {
    id: "bac",
    degree: "Baccalauréat, Sciences Informatiques",
    institution: "Lycée Béji Massoudi, El Krib",
    period: "2022",
    status: "completed",
  },
];
