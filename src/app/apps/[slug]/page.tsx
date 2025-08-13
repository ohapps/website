import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { apps } from '@/data/apps';
import Screenshots from '@/components/screenshots';

export function generateStaticParams() {
  return apps.map(({ slug }) => ({ slug }));
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function AppPage({ params }: PageProps) {
  const { slug } = await params;
  const app = apps.find((app) => app.slug === slug);

  if (!app) {
    return (
      <div className="container py-10 text-center mx-auto">
        <h1 className="text-3xl font-bold mb-4">Application Not Found</h1>
        <p className="mb-6">
          The application you&apos;re looking for doesn&apos;t exist.
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
        <Screenshots screenshots={app.screenshots} />
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
