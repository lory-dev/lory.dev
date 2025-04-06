import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, Code, Gamepad2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import liminality1 from './img/liminality1.png'
import lorydev from './img/lorydev.png'


export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-mono font-bold">
              lory.dev
            </Link>
            <div className="space-x-6">
              <Link href="/projects" className="hover:text-primary-foreground/80">
                Projects
              </Link>
              <Link href="/blog" className="hover:text-primary-foreground/80">
                Blog
              </Link>
              <Link href="https://games.lory.dev" className="hover:text-primary-foreground/80">
                Games
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative">
        <h1 className="text-6xl md:text-8xl font-mono font-bold text-center">
          lory
          <br />
          .dev
        </h1>
        <p className="mt-6 text-xl text-gray-400">Game & Web Developer</p>
        <div className="flex gap-4 mt-8">
          <Button variant="secondary" className="gap-2">
            <Gamepad2 className="w-4 h-4" />
            <Link href="#projects">Game Projects</Link>
          </Button>
          <Button variant="secondary" className="gap-2">
            <Code className="w-4 h-4" />
            <Link href="#projects">Web Projects</Link>
          </Button>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-90" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-black/50 border border-white/10 p-6">
              <h3 className="text-xl text-neutral-50 font-bold mb-4">Liminality</h3>
              <Image
                src={liminality1}
                alt="Game Screenshot"
                width={500}
                height={300}
                className="rounded-lg mb-4"
              />
              <p className="text-gray-400 mb-4">
                The most Liminal experience yet.
              </p>
              <Button variant="outline" asChild>
                <Link href="/projects/liminality">Learn More</Link>
              </Button>
            </Card>
            <Card className="bg-black/50 border border-white/10 p-6">
              <h3 className="text-xl text-neutral-50 font-bold mb-4">(legacy.)lory.dev</h3>
              <Image
                src={lorydev}
                alt="Web App Screenshot"
                width={500}
                height={300}
                className="rounded-lg mb-4"
              />
              <p className="text-gray-400 mb-4">
                My first website. Still hosted on legacy.lory.dev
              </p>
              <Button variant="outline" asChild>
                <Link href="/projects/lory-dev">Learn More</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-gradient-to-b from-gray-90 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/blog/2" className="group">
              <Card className="bg-black/50 border border-white/10 p-6 h-full transition-transform group-hover:-translate-y-2">
                <h3 className="text-xl text-neutral-50 font-bold mb-2">Welcome to the new lory.dev</h3>
                <p className="text-gray-400">My second post welcoming you all in my new new website!</p>
                <div className="mt-4 text-sm text-gray-500">November 4, 2024</div>
              </Card>
            </Link>
            <Link href="/blog/1" className="group">
              <Card className="bg-black/50 border border-white/10 p-6 h-full transition-transform group-hover:-translate-y-2">
                <h3 className="text-xl text-neutral-50 font-bold mb-2">Welcome to lory.dev</h3>
                <p className="text-gray-400">My first post welcoming you all in my website!</p>
                <div className="mt-4 text-sm text-gray-500">June 27, 2024</div>
              </Card>
            </Link>
            {/*<Link href="/blog" className="group">
              <Card className="bg-black/50 border border-white/10 p-6 h-full transition-transform group-hover:-translate-y-2">
                <h3 className="text-xl text-neutral-50 font-bold mb-2">coming soon</h3>
                <p className="text-gray-400">forgot to write this blog post, sorry bro.</p>
                <div className="mt-4 text-sm text-gray-500">april 20, 2069</div>
              </Card>
            </Link>*/}
          </div>
          <div className="text-center mt-12">
            <Button variant="secondary" asChild>
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-mono font-bold mb-4 md:mb-0">lory.dev</div>
            <div className="flex gap-6">
              <Link href="https://github.com/lory-dev/lory.dev" target="_blank" className="hover:text-primary-foreground/80">
                GitHub
              </Link>
              <Link href="https://games.lory.dev" className="hover:text-primary-foreground/80">
                Games
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} lory.dev. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
