import { App } from "@/types/apps";

export const apps: App[] = [
    {
        title: 'Snobbin',
        slug: 'snobbin',
        featured: true,
        logo: '/snobbin/icon.png',
        category: 'Social',
        description: 'A simple group ranking app for friends and communities.',
        longDescription:
            "Snobbin is a fun and engaging way to create and manage group rankings. Whether it's for your friend group, a community, or any other social circle, Snobbin allows you to easily set up rankings based on various criteria. Users can vote on their favorite options, and the app automatically calculates and displays the results in real-time.",
        features: [
            'Create a group with a custom ranking criteria',
            'Invite friends to join and vote',
            'Real-time updates of rankings',
            'Share results with the group',
            'Upload images and create custom attributes for ranking items'
        ],
        technologies: ['React', 'Next.js', 'MUI', 'Supabase'],
        demoUrl: 'https://snobbin.ohapps.com',
        githubUrl: 'https://github.com/ohapps/snobbin',
        screenshots: [
            { url: '/snobbin/screenshot_1.png', alt: 'Group Item List' },
            { url: '/snobbin/screenshot_2.png', alt: 'Item Edit' },
            { url: '/snobbin/screenshot_3.png', alt: 'Group Edit' },
        ],
    }
];