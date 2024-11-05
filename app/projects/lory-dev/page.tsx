import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import websitebanner from '../../img/lorydev.png'

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-black text-white">
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

      <main className="pt-32 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/projects" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </Button>

          <div className="grid gap-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">(legacy)lory.dev</h1>
              <p className="text-xl text-gray-400">
                My first ever website made by me for me published somewhere.
              </p>
            </div>

            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src={websitebanner}
                alt="Game Screenshot"
                className="object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" className="gap-2">
                <ExternalLink className="w-4 h-4" />
                <Link href="https://legacy.lory.dev">Website Link</Link>
              </Button>
              <Button  variant="secondary" className="gap-2">
                <Github className="w-4 h-4" />
                <Link href="https://github.com/legacy.lory.dev">Source Code</Link>
              </Button>
            </div>

            <div className="grid gap-6">
              <h2 className="text-2xl font-bold">About the Project</h2>
              <p className="text-gray-400">
                This is my first website I ever made, to get some practice with HTML, CSS and JavaScript.
                After working on it for a little bit, I decided it just wasn't gonna cut it anymore, and decided to remake it.
              </p>

              <h3 className="text-xl font-bold">Details</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Made in only HTML, CSS and JavaScript.</li>
                <li>Made in a few weeks.</li>
              </ul>
            </div>

          </div>
        </article>
      </main>

      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-mono font-bold mb-4 md:mb-0">lory.dev</div>
            <div className="flex gap-6">
              <Link href="https://github.com/lory-dev" className="hover:text-primary-foreground/80">
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