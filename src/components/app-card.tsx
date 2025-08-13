import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './ui/card';
import { App } from '@/types/apps';
import Link from 'next/link';

export function AppCard({ app }: { app: App }) {
  return (
    <Card key={app.slug} className="overflow-hidden">
      <CardHeader className="p-6">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{app.title}</CardTitle>
          <Badge>{app.category}</Badge>
        </div>
        <CardDescription>{app.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="rounded-md bg-muted flex items-center justify-center">
          <img
            src={app.logo}
            alt={`${app.title} Logo`}
            className="w-48 h-48 object-contain rounded shadow-md py-5"
          />
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between">
        <Link href={`/apps/${app.slug}`}>
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </Link>
        <Link href={app.demoUrl} target="_blank">
          <Button size="sm">Live Demo</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
