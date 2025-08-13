import { Button } from '@/components/ui/button';
import { ContactInfo } from '@/data/contact';
import { links } from '@/types/links';
import { Github, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container py-10 mx-auto">
      <div className="flex flex-col items-center space-y-4 text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Contact Us
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Get in touch with the Open House Apps team
        </p>
      </div>

      <div className="space-y-6 mx-auto max-w-2xl">
        <div>
          <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
          <p className="text-muted-foreground mb-6">
            We&apos;re always looking to connect with developers, designers, and
            anyone interested in our projects. Feel free to reach out through
            any of the channels below.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="flex items-center p-4 border rounded-lg">
            <Mail className="h-5 w-5 mr-4" />
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-sm text-muted-foreground">
                {ContactInfo.EMAIL}
              </p>
            </div>
          </div>
          <div className="flex items-center p-4 border rounded-lg">
            <Github className="h-5 w-5 mr-4" />
            <div>
              <h3 className="font-medium">GitHub</h3>
              <p className="text-sm text-muted-foreground">
                {ContactInfo.GITHUB}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h3 className="font-bold mb-2">Contribute to Our Projects</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Interested in contributing to our open-source projects? Check out
            our GitHub repositories and join our community of developers.
          </p>
          <Button variant="outline" className="w-full bg-transparent" asChild>
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View GitHub Repositories
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
