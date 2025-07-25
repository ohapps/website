import Link from 'next/link';
import { Github, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="container py-10 mx-auto">
      <div className="flex flex-col items-center space-y-4 text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          About Open House Apps
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Learn more about our mission and the team behind Open House Apps
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Open House Apps was created with a simple mission: to showcase
              high-quality web applications built with modern technologies and
              best practices.
            </p>
            <p>
              We believe in the power of open-source software and the importance
              of sharing knowledge with the developer community. All of our
              applications are open-source and available on GitHub, allowing
              developers to learn from our code, contribute to our projects, and
              build upon our work.
            </p>
            <p>
              Our goal is to provide a platform for developers to explore,
              learn, and get inspired by real-world applications that
              demonstrate the capabilities of modern web technologies.
            </p>
          </div>
        </div>
        <div className="bg-muted rounded-lg p-8 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold">Open Source First</h3>
            <p className="text-muted-foreground">
              All of our applications are open-source and available on GitHub.
              We believe in the power of community-driven development.
            </p>
            <Button asChild>
              <Link href="https://github.com/openhouse-apps" target="_blank">
                <Github className="mr-2 h-4 w-4" />
                Visit Our GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-2">Quality</h3>
            <p className="text-muted-foreground">
              We strive for excellence in all our applications, focusing on
              clean code, intuitive user interfaces, and robust functionality.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-muted-foreground">
              We embrace new technologies and approaches, constantly pushing the
              boundaries of what&apos;s possible in web development.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-2">Education</h3>
            <p className="text-muted-foreground">
              We believe in the importance of learning and sharing knowledge,
              providing detailed documentation and resources for our
              applications.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-2">Community</h3>
            <p className="text-muted-foreground">
              We value the contributions of our community members and strive to
              create an inclusive and collaborative environment.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-2">Accessibility</h3>
            <p className="text-muted-foreground">
              We are committed to making our applications accessible to all
              users, regardless of their abilities or disabilities.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-2">Transparency</h3>
            <p className="text-muted-foreground">
              We believe in being open and honest about our processes,
              decisions, and the technologies we use.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-muted-foreground mb-6 max-w-[600px] mx-auto">
          Have questions, suggestions, or want to contribute to our projects?
          We&apos;d love to hear from you!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://github.com/openhouse-apps" target="_blank">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
