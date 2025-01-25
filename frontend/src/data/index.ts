export interface PostType {
  id: number;
  imgUrl: string;
  title: string;
  subtitle: string;
  subtitle2: string;
  title1: string;
  description: string[];
}

export const posts: PostType[] = [
  {
    id: 1,
    imgUrl: "/images/blog1.png",
    subtitle: "Causes of stress",
    subtitle2: "pheromones or herbal supplements",
    title1: "Many pets experience",
    title: "Stress and Anxiety",
    description: [
      "Environmental changes",
      "Noise and loud sounds",
      "Separation",
      "Illness",
      "Dietary changes",
      "Exposure to toxins",
      "Changes in weather",
      "How to help a pet",
      "Provide a quiet and stable environment",
      "Consistent routine",
      "Interaction and communication",
      "Play and fun",
      "Veterinary consultation",
      "Behavioral therapy",
      "Calming products",
    ],
  },
  {
    id: 2,
    imgUrl: "/images/blog2.png",
    subtitle: "",
    subtitle2: "",
    title1: "It's always a worry",
    title: "Why Is Your Cat Coughing?",
    description: [
      "Hairballs",
      "Solution1",
      "Respiratory Infections",
      "Solution2",
      "Asthma",
      "Solution3",
      "Heart Disease",
      "Solution4",
    ],
  },
  {
    id: 3,
    imgUrl: "/images/blog3.png",
    subtitle: "Foods to Avoid",
    subtitle2:"If you have any questions",
    title1:"A cat's diet plays",
    title: "The Purrfect Diet",
    description: [
      "Dairy Products",
      "Chocolate",
      "Grapes and Raisins",
      "Onions and Garlic",
      "Alcohol",
      "Raw Meat and Fish",
      "Fatty Foods",
      "High-Quality Cat Food",
      "Fresh Water",
      "Occasional Treats",
      "Consult Your Veterinarian",
    ],
  },
];
