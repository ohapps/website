import Link from 'next/link';
import { Code, Compass, FileText, Layers, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function AppsPage() {
  return (
    <div>
      <div className="flex flex-col items-center space-y-4 text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Applications
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Browse our collection of web applications
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search applications..."
            className="pl-8"
          />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="productivity">Productivity</SelectItem>
            <SelectItem value="utility">Utility</SelectItem>
            <SelectItem value="development">Development</SelectItem>
            <SelectItem value="entertainment">Entertainment</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Apps Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* App 1 */}
        <Card className="overflow-hidden">
          <CardHeader className="p-6">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Task Manager</CardTitle>
              <Badge>Productivity</Badge>
            </div>
            <CardDescription>
              A simple yet powerful task management application
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <div className="h-40 bg-muted rounded-md flex items-center justify-center">
              <Layers className="h-12 w-12 text-muted-foreground" />
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0 flex justify-between">
            <Link href="/apps/task-manager">
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </Link>
            <Link href="https://task-manager.openhouse.app" target="_blank">
              <Button size="sm">Live Demo</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* App 2 */}
        <Card className="overflow-hidden">
          <CardHeader className="p-6">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Weather Dashboard</CardTitle>
              <Badge>Utility</Badge>
            </div>
            <CardDescription>
              Real-time weather information with beautiful visualizations
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <div className="h-40 bg-muted rounded-md flex items-center justify-center">
              <Compass className="h-12 w-12 text-muted-foreground" />
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0 flex justify-between">
            <Link href="/apps/weather-dashboard">
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </Link>
            <Link href="https://weather.openhouse.app" target="_blank">
              <Button size="sm">Live Demo</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* App 3 */}
        <Card className="overflow-hidden">
          <CardHeader className="p-6">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Code Playground</CardTitle>
              <Badge>Development</Badge>
            </div>
            <CardDescription>
              Interactive code editor with real-time preview
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <div className="h-40 bg-muted rounded-md flex items-center justify-center">
              <Code className="h-12 w-12 text-muted-foreground" />
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0 flex justify-between">
            <Link href="/apps/code-playground">
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </Link>
            <Link href="https://code.openhouse.app" target="_blank">
              <Button size="sm">Live Demo</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* App 4 */}
        <Card className="overflow-hidden">
          <CardHeader className="p-6">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Note Taking App</CardTitle>
              <Badge>Productivity</Badge>
            </div>
            <CardDescription>
              Simple and elegant note-taking application
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <div className="h-40 bg-muted rounded-md flex items-center justify-center">
              <FileText className="h-12 w-12 text-muted-foreground" />
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0 flex justify-between">
            <Link href="/apps/note-taking">
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </Link>
            <Link href="https://notes.openhouse.app" target="_blank">
              <Button size="sm">Live Demo</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
