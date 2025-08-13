import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { apps } from '@/data/apps';
import { AppCard } from '@/components/app-card';

export default function Home() {
  const featuredApps = apps.filter((app) => app.featured);
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
            {featuredApps.map((app) => (
              <AppCard key={app.slug} app={app} />
            ))}
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
