import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Github, Mail, MessageSquare, Twitter } from 'lucide-react';

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

      <div className="grid md:grid-cols-2 gap-10">
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What is this regarding?" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="min-h-[150px]"
                />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Send Message</Button>
          </CardFooter>
        </Card>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
            <p className="text-muted-foreground mb-6">
              We're always looking to connect with developers, designers, and
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
                  contact@openhouse.app
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 border rounded-lg">
              <Github className="h-5 w-5 mr-4" />
              <div>
                <h3 className="font-medium">GitHub</h3>
                <p className="text-sm text-muted-foreground">
                  github.com/openhouse-apps
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 border rounded-lg">
              <Twitter className="h-5 w-5 mr-4" />
              <div>
                <h3 className="font-medium">Twitter</h3>
                <p className="text-sm text-muted-foreground">@openhouseapps</p>
              </div>
            </div>
            <div className="flex items-center p-4 border rounded-lg">
              <MessageSquare className="h-5 w-5 mr-4" />
              <div>
                <h3 className="font-medium">Discord</h3>
                <p className="text-sm text-muted-foreground">
                  discord.gg/openhouse-apps
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
              <a
                href="https://github.com/openhouse-apps"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View GitHub Repositories
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
