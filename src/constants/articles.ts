interface Tag {
  tag: string;
}

interface Profile {
  avatarUrl: string;
  name: string;
}

export interface Article extends Profile {
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
    tags: [{ tag: "Frontend" }],
    avatarUrl: "/images/people/v2_0380897.avif",
    name: "Valeria Torres",
  },
  {
    imageUrl: "/images/pMnw5BSZYsA.avif",
    alt: "Smiling man holding a card with the word Code on it",
    title: "Bringing Ideas to Life Through Code",
    tags: [{ tag: "Coding" }],
    avatarUrl: "/images/people/v2_0439283.avif",
    name: "Mateo Rivas",
  },
  {
    imageUrl: "/images/E6loQeZDIiM.avif",
    alt: "Code in the visual estudio code program",
    title: "Exploring the Art of Frontend Development",
    tags: [{ tag: "Frontend" }],
    avatarUrl: "/images/people/v2_0601947.avif",
    name: "Camila Herrera",
  },
  {
    imageUrl: "/images/fdGTi4IcaJc.avif",
    alt: "Man working with multiple screens",
    title: "Optimizing Web Performance for Better UX",
    tags: [{ tag: "Performance" }],
    avatarUrl: "/images/people/v2_0631269.avif",
    name: "Lucas Méndez",
  },
  {
    imageUrl: "/images/80121.avif",
    alt: "Woman writing notes while coding",
    title: "Building Accessible and Inclusive Web Apps",
    tags: [{ tag: "Accessibility" }],
    avatarUrl: "/images/people/v2_0180166.avif",
    name: "Sofía Delgado",
  },
];
