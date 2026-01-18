export type Image = {
    url: string;
    alt: string;
}

export type App = {
    title: string;
    slug: string;
    featured: boolean;
    logo: Image;
    category: string;
    description: string;
    longDescription: string;
    features: string[];
    technologies: string[];
    demoUrl: string;
    githubUrl: string;
    screenshots: Image[];
}