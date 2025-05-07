interface Tag {
  tag: string;
}

export interface Article {
  imageUrl: string;
  alt: string;
  title: string;
  tags: Tag[];
}

export const ARTICLES: Article[] = [
  {
    imageUrl: "/images/xPjsMamUBK4.avif",
    alt: "Woman designing in figma",
    title: "Crafting Interfaces with Modern Web Technologies",
    tags: [{ tag: "Frontend" }, { tag: "UI" }],
  },
  {
    imageUrl: "/images/pMnw5BSZYsA.avif",
    alt: "Smiling man holding a card with the word Code on it",
    title: "Bringing Ideas to Life Through Code",
    tags: [{ tag: "Coding" }],
  },
  {
    imageUrl: "/images/E6loQeZDIiM.avif",
    alt: "Code in the visual estudio code program",
    title: "Exploring the Art of Frontend Development",
    tags: [{ tag: "Frontend" }],
  },
];
