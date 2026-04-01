const projects: Portfolio.Project[] = [
  {
    title: "Coffee Shop Website",
    coverImage: "/modern-coffee-shop-website-with-menu-browsing.jpg",
    description:
      "Built a fullstack coffee shop website with a custom CMS for managing products, categories, and content. The platform includes a branded landing page, product catalog, FAQ and contact sections, and authentication system. Designed to simulate a real business workflow where administrators can manage menu items dynamically.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Drizzle ORM",
      "ReactTable",
      "ReactForm",
      "ReactQuery",
    ],
    highlights: [
      "Custom CMS for managing products and categories",
      "Dynamic product catalog with multiple item types",
      "Authentication system for admin access",
      "Branded homepage with FAQ and contact sections",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Wawads1005/coffee-shop" },
      { label: "Demo", href: "https://coffee-shop-tau-flax.vercel.app/" },
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
    links: [],
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
    links: [],
  },
  {
    title: "Self-Hosted AdGuard & Traefik Network",
    coverImage: "/traefik.png",
    description:
      "Set up a secure, self-hosted DNS and reverse proxy system using AdGuardHome, Traefik, and Docker. Configured wildcard certificates, DNS rewrites, and network routing to manage multiple local services efficiently.",
    tech: ["Docker", "Traefik", "AdGuard", "Linux OS Distro", "Networking"],
    highlights: [
      "Implemented DNS rewriting for local services",
      "Configured Traefik with wildcard SSL certificates",
      "Managed multiple services using Docker Compose",
      "Improved network security and ad-blocking",
    ],
    links: [],
  },
  {
    title: "2048 Game",
    coverImage: "/play_2048.jpg",
    description:
      "Built a browser-based 2048 game with tile movement, merge logic, score progression, keyboard controls, and undo/redo history. Focused on recreating the core gameplay experience while handling grid state, movement rules, and responsive visual feedback.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Custom Hooks",
      "Keyboard Events",
    ],
    highlights: [
      "Implemented tile movement and merge mechanics",
      "Added undo and redo history tracking",
      "Handled keyboard controls for smooth gameplay",
      "Built responsive board and tile UI",
    ],
    links: [
      {
        href: "https://2048-omega-six.vercel.app/",
        label: "Demo",
      },
      {
        href: "https://github.com/Wawads1005/2048",
        label: "Github",
      },
    ],
  },
  {
    title: "Unix-like Shell (C)",
    coverImage: "/shell.png",
    description:
      "Built a minimal Unix-like shell in C to understand process management, system calls, and command execution at a low level. The shell reads user input, parses arguments, handles built-in commands, and spawns child processes to execute programs.",
    tech: ["C", "POSIX", "Linux", "System Calls", "Process Management"],
    highlights: [
      "Implemented command parsing using tokenization",
      "Spawned child processes using fork and exec",
      "Handled built-in commands like cd and exit",
      "Managed process synchronization with wait",
      "Built interactive shell loop with prompt",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Wawads1005/shell",
      },
    ],
  },
];

export { projects };
