import Link from 'next/link';
import { ArrowRight, Code, Compass, Layers } from 'lucide-react';

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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Welcome to Open House Apps
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A curated collection of web applications built with modern
                technologies. Explore, learn, and get inspired.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/apps">
                <Button className="px-8">
                  Browse Apps
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="px-8 bg-transparent">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Apps Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Featured Applications
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Check out some of our highlighted web applications
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Featured App 1 */}
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

            {/* Featured App 2 */}
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

            {/* Featured App 3 */}
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
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/apps">
              <Button variant="outline">View All Applications</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Open House Apps
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Open House Apps is a showcase of web applications built with
                modern technologies. Our mission is to provide high-quality,
                open-source applications that demonstrate best practices in web
                development.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/about">
                  <Button>Learn More</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">Contact Us</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-[300px] w-full max-w-[500px] bg-background rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <p className="text-2xl font-bold">Open Source</p>
                  <p className="text-muted-foreground">
                    All applications are available on GitHub
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
