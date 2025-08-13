import type React from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Github } from 'lucide-react';

import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import './globals.css';
import { links } from '@/types/links';
import Logo from '@/components/logo';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Open House Apps',
  description: 'A showcase of web applications built with modern technologies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col items-center">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center">
              <div className="w-full max-w-screen-xl mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-6 md:gap-10">
                  <Logo />
                  <nav className="hidden md:flex gap-6">
                    <Link
                      href="/"
                      className="text-sm font-medium transition-colors hover:text-primary"
                    >
                      Home
                    </Link>
                    <Link
                      href="/apps"
                      className="text-sm font-medium transition-colors hover:text-primary"
                    >
                      Applications
                    </Link>
                    <Link
                      href="/about"
                      className="text-sm font-medium transition-colors hover:text-primary"
                    >
                      About
                    </Link>
                    <Link
                      href="/contact"
                      className="text-sm font-medium transition-colors hover:text-primary"
                    >
                      Contact
                    </Link>
                  </nav>
                </div>
                <div className="flex items-center gap-2">
                  <Link href={links.github} target="_blank">
                    <Button variant="ghost" size="icon">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <ModeToggle />
                  <Button className="hidden md:flex" asChild>
                    <Link href="/apps">Browse Apps</Link>
                  </Button>
                </div>
              </div>
            </header>
            <main className="w-full max-w-screen-xl py-10 px-4">
              {children}
            </main>
            <footer className="border-t w-full">
              <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  © {new Date().getFullYear()} Open House Apps. All rights
                  reserved.
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    href="/privacy"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Privacy
                  </Link>
                  <Link
                    href="/terms"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Terms
                  </Link>
                  <Link
                    href="/contact"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
