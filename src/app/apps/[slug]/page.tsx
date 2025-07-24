import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// This would typically come from a database or API
const apps = {
  'task-manager': {
    title: 'Task Manager',
    category: 'Productivity',
    description: 'A simple yet powerful task management application',
    longDescription:
      "The Task Manager application helps you organize your daily tasks, set priorities, and track your progress. With features like task categories, due dates, and progress tracking, it's the perfect tool to boost your productivity.",
    features: [
      'Create and manage tasks with ease',
      'Organize tasks into projects and categories',
      'Set due dates and reminders',
      'Track your progress with visual indicators',
      'Collaborate with team members',
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Supabase'],
    demoUrl: 'https://task-manager.openhouse.app',
    githubUrl: 'https://github.com/openhouse-apps/task-manager',
    screenshots: [
      { url: '/placeholder.svg', alt: 'Task Manager Dashboard' },
      { url: '/placeholder.svg', alt: 'Task Creation Form' },
      { url: '/placeholder.svg', alt: 'Task Categories View' },
    ],
  },
  'weather-dashboard': {
    title: 'Weather Dashboard',
    category: 'Utility',
    description: 'Real-time weather information with beautiful visualizations',
    longDescription:
      'The Weather Dashboard provides real-time weather information for locations around the world. With beautiful visualizations and detailed forecasts, you can stay informed about current conditions and plan ahead.',
    features: [
      'Real-time weather data for any location',
      '7-day forecast with detailed information',
      'Interactive weather maps',
      'Severe weather alerts',
      'Historical weather data',
    ],
    technologies: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'OpenWeatherMap API',
      'Chart.js',
    ],
    demoUrl: 'https://weather.openhouse.app',
    githubUrl: 'https://github.com/openhouse-apps/weather-dashboard',
    screenshots: [
      { url: '/placeholder.svg', alt: 'Weather Dashboard Main View' },
      { url: '/placeholder.svg', alt: 'Forecast View' },
      { url: '/placeholder.svg', alt: 'Weather Map' },
    ],
  },
  'code-playground': {
    title: 'Code Playground',
    category: 'Development',
    description: 'Interactive code editor with real-time preview',
    longDescription:
      "The Code Playground is an interactive code editor that allows you to write and test HTML, CSS, and JavaScript code in real-time. With features like syntax highlighting, code completion, and instant preview, it's the perfect tool for web developers.",
    features: [
      'Write HTML, CSS, and JavaScript code',
      'Real-time preview of your code',
      'Syntax highlighting and code completion',
      'Save and share your code snippets',
      'Multiple themes and customization options',
    ],
    technologies: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'Monaco Editor',
      'Babel',
    ],
    demoUrl: 'https://code.openhouse.app',
    githubUrl: 'https://github.com/openhouse-apps/code-playground',
    screenshots: [
      { url: '/placeholder.svg', alt: 'Code Playground Editor' },
      { url: '/placeholder.svg', alt: 'Code Preview' },
      { url: '/placeholder.svg', alt: 'Code Sharing Interface' },
    ],
  },
  'note-taking': {
    title: 'Note Taking App',
    category: 'Productivity',
    description: 'Simple and elegant note-taking application',
    longDescription:
      "The Note Taking App is a simple and elegant application for capturing your thoughts, ideas, and important information. With features like rich text editing, organization with tags, and cloud synchronization, it's the perfect tool for keeping your notes organized.",
    features: [
      'Create and edit notes with rich text formatting',
      'Organize notes with tags and categories',
      'Search through your notes quickly',
      'Cloud synchronization across devices',
      'Dark mode support',
    ],
    technologies: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'Tiptap Editor',
      'Supabase',
    ],
    demoUrl: 'https://notes.openhouse.app',
    githubUrl: 'https://github.com/openhouse-apps/note-taking',
    screenshots: [
      { url: '/placeholder.svg', alt: 'Notes Dashboard' },
      { url: '/placeholder.svg', alt: 'Note Editor' },
      { url: '/placeholder.svg', alt: 'Tags Management' },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(apps).map((slug) => ({ slug }));
}

export default function AppPage({ params }: { params: { slug: string } }) {
  const app = apps[params.slug as keyof typeof apps];

  if (!app) {
    return (
      <div className="container py-10 text-center mx-auto">
        <h1 className="text-3xl font-bold mb-4">Application Not Found</h1>
        <p className="mb-6">
          The application you're looking for doesn't exist.
        </p>
        <Button asChild>
          <Link href="/apps">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Applications
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-10 mx-auto">
      <div className="mb-6">
        <Link
          href="/apps"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Applications
        </Link>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {app.title}
            </h1>
            <Badge>{app.category}</Badge>
          </div>
          <p className="text-muted-foreground text-lg">{app.description}</p>
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <Link href={app.demoUrl} target="_blank">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={app.githubUrl} target="_blank">
              <Github className="mr-2 h-4 w-4" />
              Source Code
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-10">
        <div className="md:col-span-2">
          <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
            <img
              src="/placeholder.svg"
              alt={`${app.title} Screenshot`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {app.screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="aspect-video bg-muted rounded-lg overflow-hidden"
              >
                <img
                  src={screenshot.url || '/placeholder.svg'}
                  alt={screenshot.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="tech">Tech</TabsTrigger>
            </TabsList>
            <TabsContent
              value="overview"
              className="p-4 border rounded-lg mt-2"
            >
              <p className="text-sm leading-relaxed">{app.longDescription}</p>
            </TabsContent>
            <TabsContent
              value="features"
              className="p-4 border rounded-lg mt-2"
            >
              <ul className="list-disc pl-5 space-y-2 text-sm">
                {app.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="tech" className="p-4 border rounded-lg mt-2">
              <div className="flex flex-wrap gap-2">
                {app.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
