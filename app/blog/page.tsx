import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, Code, Gamepad2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import liminality1 from '../img/liminality1.png'
import lorydev from '../img/lorydev.png'


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
        <br></br>
        <h2 className="text-5xl md:text-5xl font-mono font-semibold text-center">/blog</h2>
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-90" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">All Blog Posts</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            <Card className="bg-black/50 border border-white/10 p-6">
              <h3 className="text-xl text-neutral-50 font-bold mb-4">Welcome to the new lory.dev</h3>
              <h2 className="text-gray-500 text-xs">November 4, 2024 19:49</h2>
              <p className="text-gray-400 mb-4">
                My second post welcoming you all in my new new website!
              </p>
              <Button variant="outline" asChild>
                <Link href="/blog/2">Read More</Link>
              </Button>
            </Card>
            <Card className="bg-black/50 border border-white/10 p-6">
              <h3 className="text-xl text-neutral-50 font-bold mb-4">Welcome to lory.dev</h3>
              <h2 className="text-gray-500 text-xs">June 27, 2024 18:05</h2>
              <p className="text-gray-400 mb-4">
                My first post welcoming you all in my new website!
              </p>
              <Button variant="outline" asChild>
                <Link href="/blog/1">Read More</Link>
              </Button>
            </Card>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-mono font-bold mb-4 md:mb-0">lory.dev</div>
            <div className="flex gap-6">
              <Link href="https://github.com/lory-dev" className="hover:text-primary-foreground/80">
                GitHub
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
