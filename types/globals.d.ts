declare namespace Portfolio {
  interface Project {
    title: string;
    coverImage: string;
    description: string;
    tech: string[];
    highlights: string[];
  }

  interface NavigationLink {
    href: string;
    label: string;
  }
}
