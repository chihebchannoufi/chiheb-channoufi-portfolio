import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Interfaces réactives et interactives",
    items: ["React.js", "Vue.js", "TypeScript", "JavaScript", "Bootstrap", "jQuery", "HTML", "CSS"],
  },
  {
    id: "backend",
    label: "Backend",
    description: "APIs et logique serveur",
    items: ["Laravel", "Node.js", "Flask", "PHP", "Python"],
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
    items: ["MySQL", "MongoDB", "ChromaDB"],
  },
  {
    id: "devops",
    label: "DevOps & Outils",
    description: "Conteneurisation, versioning, collaboration",
    items: ["Docker", "Kubernetes", "Git", "GitHub", "Linux CLI", "Postman", "CI/CD"],
  },
  {
    id: "languages",
    label: "Langues",
    description: "Communication professionnelle",
    items: ["Arabe — Langue maternelle", "Français — Courant", "Anglais — Intermédiaire"],
  },
];
