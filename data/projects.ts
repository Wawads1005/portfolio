const projects: Portfolio.Project[] = [
  {
    title: "Coffee Shop Website",
    coverImage: "/modern-coffee-shop-website-with-menu-browsing.jpg",
    description:
      "Developed a static page for local coffee shop, featuring the coffee shop feedback, history and details. Implemented a way to browse menu with ease-use of filtering the coffee by its category (e.g. hot coffee, cold coffee, beverages, and etc.), and combine search query (e.g. category, name, tags, and etc.).",
    tech: ["Next.JS", "Tailwind CSS", "Framer Motion", "Prisma ORM"],
    highlights: [
      "Category filtering & search",
      "Integrated map navigation",
      "Contact & reservation system",
    ],
  },
  {
    title: "Manga Reading App",
    coverImage: "/manga-reading-app-interface-with-trending-carousel.jpg",
    description:
      "Created a personal manga reading app cross platform that uses Official Mangadex API. Featuring the trending comics series (e.g. manga, manhwa, manhua, and etc.) with a carousel. Displayed a different comic series in a card, highlighting the series title and rate.",
    tech: ["React Native", "Mangadex API", "Flat List"],
    highlights: [
      "Trending carousel display",
      "Filter by type, genre & popularity",
      "Virtualization & offset pagination",
    ],
  },
  {
    title: "Vehicle Parking Detection System",
    coverImage: "/vehicle-license-plate-detection-system-with-comput.jpg",
    description:
      "Helped a group of college students fix their thesis project to help guards and administration identify vehicles entering the parking lot. The system captures who (vehicle owner), what (type of vehicles), why (visit purpose), and when (time of enter or exit).",
    tech: ["YOLO", "EasyOCR", "Roboflow", "Computer Vision"],
    highlights: [
      "Trained dedicated license plate detection model",
      "Fixed manual cropping calculations",
      "Improved OCR accuracy",
    ],
  },
];

export { projects };
