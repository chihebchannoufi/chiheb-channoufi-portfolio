import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Interfaces réactives et interactives",
    items: ["HTML", "CSS","Bootstrap", "jQuery","JavaScript", "TypeScript","React.js", "Vue.js"],
  },
  {
    id: "backend",
    label: "Backend",
    description: "APIs et logique serveur",
    items: ["PHP","Laravel", "Node.js", "Python", "Flask"],
  },
  {
    id: "ai-ml",
    label: "IA & Machine Learning",
    description: "Modélisation, NLP et LLMs",
    items: [
      "Scikit-learn",
      "TensorFlow",
      "LangChain",
      "HuggingFace",
      "LLMs (Groq API)",
      "TF-IDF",
      "Régression logistique",
      "Autoencodeurs",
      "RAG",
      "NLP",
    ],
  },
  {
    id: "data",
    label: "Bases de données",
    description: "Stockage relationnel et vectoriel",
    items: ["MySQL", "MongoDB"],
  },
  {
    id: "devops",
    label: "DevOps & Outils",
    description: "Conteneurisation, versioning, collaboration",
    items: ["Git", "GitHub","Linux CLI","Docker", "Kubernetes", "Postman", "CI/CD"],
  },
  {
    id: "languages",
    label: "Langues",
    description: "Communication professionnelle",
    items: ["Arabe — Langue maternelle", "Français — Courant", "Anglais — Intermédiaire"],
  },
];
