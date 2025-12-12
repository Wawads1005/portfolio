import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { AppTheme } from "@/components/globals/app-theme";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navigationLinks } from "@/data/navigation-links";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Code2Icon, MenuIcon } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { informations } from "@/data/informations";
import { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface RootLayoutProps {
  children?: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Jan Joshua De Guzman | Web Developer Portfolio",
  description:
    "Portfolio of Jan Joshua De Guzman — a curiosity-driven full-stack JavaScript developer exploring web development, backend systems, and creative technical solutions.",
  keywords: [
    "Jan Joshua De Guzman",
    "Wawads Dev",
    "Web Developer",
    "Full Stack Developer",
    "JavaScript Developer",
    "Node.js",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Jan Joshua De Guzman" }],
  creator: "Jan Joshua De Guzman",
  publisher: "Jan Joshua De Guzman",

  openGraph: {
    title: "Jan Joshua De Guzman | Web Developer Portfolio",
    description:
      "Curiosity-driven explorer and full-stack JavaScript developer building clean, thoughtful, and fast digital experiences.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jan Joshua De Guzman | Web Developer Portfolio",
    description:
      "Full-stack JavaScript developer and curiosity-driven explorer crafting web applications.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "relative antialiased",
        )}
      >
        <AppTheme attribute="class" defaultTheme="dark" enableSystem={false}>
          <header className="border-border/30 bg-background/95 supports-backdrop-filter:bg-background/75 fixed inset-x-0 top-0 z-50 h-16 w-full border-b px-4 md:px-8">
            <div className="container mx-auto flex h-full items-center justify-between">
              <div className="flex items-center gap-2">
                <Code2Icon className="text-accent-foreground h-6 w-6" />
                <span className="font-mono text-sm font-medium">
                  @wawads.dev
                </span>
              </div>
              <NavigationMenu className="hidden md:flex">
                <NavigationMenuList>
                  {navigationLinks.map((navigationLink) => {
                    const isContact = navigationLink.label === "Contact";

                    return (
                      <NavigationMenuItem key={navigationLink.href}>
                        <NavigationMenuLink
                          className={
                            isContact
                              ? buttonVariants({ variant: "default" })
                              : navigationMenuTriggerStyle()
                          }
                          asChild
                        >
                          <Link href={navigationLink.href}>
                            {navigationLink.label}
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
              <Sheet>
                <SheetTrigger className="block md:hidden" asChild>
                  <Button variant="outline">
                    <MenuIcon />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Navigation Menu</SheetTitle>
                    <SheetDescription>
                      To navigate the page click the link below.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="p-4 pt-0">
                    <nav>
                      <ul className="grid gap-4">
                        {navigationLinks.map((navigationLink) => {
                          return (
                            <li
                              key={navigationLink.href}
                              className="text-sm font-medium"
                            >
                              <a href={navigationLink.href}>
                                {navigationLink.label}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </header>
          <main>{children}</main>
          <footer className="border-border/40 border-t px-6 py-8">
            <div className="mx-auto max-w-6xl">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <p className="text-muted-foreground font-mono text-sm">
                  © 2025 De Guzman, Jan Joshua. Built with Next.js & Tailwind
                  CSS.
                </p>
                <div className="flex gap-4">
                  <a
                    href={informations.links.github}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition"
                  >
                    <SiGithub />
                  </a>
                  <a
                    href={informations.links.linkedIn}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition"
                  >
                    <SiLinkedin />
                  </a>
                  <a
                    href={`mailto:${informations.email}`}
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition"
                  >
                    <SiGmail />
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </AppTheme>
      </body>
    </html>
  );
}

export default RootLayout;
