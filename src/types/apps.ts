export type App = {
    title: string;
    slug: string;
    featured: boolean;
    logo: string;
    category: string;
    description: string;
    longDescription: string;
    features: string[];
    technologies: string[];
    demoUrl: string;
    githubUrl: string;
    screenshots: { url: string; alt: string }[];
}