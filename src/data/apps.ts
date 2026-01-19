import { App } from "@/types/apps";
import { REVALIDATE_INTERVAL } from "@/config/site";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

interface StrapiImage {
    url: string;
    alternativeText?: string;
}

interface StrapiApp {
    title: string;
    slug: string;
    featured: boolean;
    logo: StrapiImage;
    category: string;
    description: string;
    longDescription: string;
    features?: string[];
    technologies?: string[];
    demoUrl: string;
    githubUrl: string;
    screenshots?: StrapiImage[];
}

const mapImage = (img: StrapiImage | undefined, fallbackAlt: string) => {
    if (!img || !img.url) return { url: '', alt: '' };

    // If it's already a full URL, use it
    if (img.url.startsWith('http')) {
        return {
            url: img.url,
            alt: img.alternativeText || fallbackAlt || ''
        };
    }

    // Otherwise, prepend the API URL and handle potential slash issues
    const baseUrl = API_URL.endsWith('/') ? API_URL.slice(0, -1) : API_URL;
    const path = img.url.startsWith('/') ? img.url : `/${img.url}`;

    return {
        url: `${baseUrl}${path}`,
        alt: img.alternativeText || fallbackAlt || ''
    };
};


export async function getApps(): Promise<App[]> {
    try {
        const response = await fetch(`${API_URL}/api/applications?populate=*`, {
            next: { revalidate: REVALIDATE_INTERVAL }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch applications');
        }

        const { data }: { data: StrapiApp[] } = await response.json();

        return data.map((item: StrapiApp) => {
            return {
                title: item.title,
                slug: item.slug,
                featured: item.featured,
                logo: mapImage(item.logo, item.title),
                category: item.category,
                description: item.description,
                longDescription: item.longDescription,
                features: item.features || [],
                technologies: item.technologies || [],
                demoUrl: item.demoUrl,
                githubUrl: item.githubUrl,
                screenshots: (item.screenshots || []).map((img: StrapiImage) => mapImage(img, item.title)),
            };
        });
    } catch (error) {
        console.error('Error loading apps:', error);
        return [];
    }
}