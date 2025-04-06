import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogPost() {
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
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to the new lory.dev!</h1>
            <div className="flex items-center gap-4 text-gray-400 mb-8">
              <time>November 11, 2024</time>
              <span>·</span>
              <span>19:49</span>
            </div>

            <br></br>

            <div className="grid gap-6">
              <h2 className="text-2xl font-bold">Welcome back to lory.dev</h2>
              <p className="text-gray-300">
                If you've been around lory.dev lately, you might have noticed that the website changed quite a bit.
              </p>
              <p className="text-gray-300">
                Mainly, the whole website layout has been redone, with Next.js instead of just basic HTML, CSS and JS.
              </p>
              <p className="text-gray-300">
                If you'd like, the old website is still available at legacy.lory.dev, and will be for an indefinite amount of time.
              </p>

              <h3 className="text-xl font-bold">What about Lory3D?</h3>
              <p className="text-gray-300">You might have also noticed that, out of the blog posts that have been ported to the new website, one is missing.</p>
              <p className="text-gray-300">I've stopped working on Lory3D lately, simply because I do not need it. It was just a way for me to work with Java, and I do not wanna work with Java ever again.</p>
              <p className="text-gray-300">It's very very buggy at the moment, and I simply do not wanna work on it, because it stops me from working on things like this website.</p>

              <h3 className="text-xl font-bold">All of a sudden?</h3>
              <p className="text-gray-300">
                I preferred keeping this, as well as many other projects, private until I have something to show. The new lory.dev is still in development!
              </p>
              <p className="text-gray-300">Before you ask, yes, the new website is open source. You can check it out on GitHub.</p>
              
              <h3 className="text-xl font-bold">Bye</h3>
              <p className="text-gray-300">That's too much writing for me, especially after writing the whole website. I will see you in the next one.</p>
            </div>

            <div className="flex items-center gap-4 mt-12 pt-8 border-t border-white/10">
              <div className="flex-1 text-right">
                <Button variant="secondary" asChild>
                  <Link href="/blog">More Posts</Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>

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