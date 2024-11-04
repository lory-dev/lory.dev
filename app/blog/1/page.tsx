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
              <Link href="/contact" className="hover:text-primary-foreground/80">
                Contact
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to lory.dev!</h1>
            <div className="flex items-center gap-4 text-gray-400 mb-8">
              <time>June 27, 2024</time>
              <span>·</span>
              <span>18:05</span>
            </div>
            <p className="text-gray-300">This post was published on the original lory.dev and may contain outdated information.</p>

            <br></br>

            <div className="grid gap-6">
              <h2 className="text-2xl font-bold">Welcome to Lory.dev</h2>
              <p className="text-gray-300">
              Welcome to lory.dev! This is my new home, my new space, built from the ground up on HTML, CSS and JavaScript to inform you guys of news and new games that I'm working on.
              </p>
              <p className="text-gray-300">
              I've always wanted to make a website, but I've never gotten around to it. In this blog post, I'm gonna explain just how I did it, and how you can do it too!
              </p>

              <h3 className="text-xl font-bold">The "history" of lory.dev and my previous domain, lorygames.it</h3>
              <p className="text-gray-300">A few months ago, I got the domain "lory.dev" for a bargain! It was around 10$/year, which is very low for a 4 character domain. It sat unused for a bit until I used it to make the currently defunct Lorycord.</p>
              <p className="text-gray-300">Lorycord was a Discord "private server", open in beta from the 29th of February to around the 5th of June. In the first two or three days, it was hosted on lorygames.it, which was a domain I got for my games, but never used it for much.</p>
              <p className="text-gray-300">It was also very buggy, and with very low-cost hosting. After a bit, I moved it to hostbrr, which Nadwey, one of my friends, suggested me.</p>
              <p className="text-gray-300">Point is, I'm very good at wasting money, but in this "tutorial" kinda post, I won't be doing that.</p>

              <h3 className="text-xl font-bold">How I made lory.dev</h3>
              <p className="text-gray-300">
                I started off learning HTML, CSS and JavaScript earlier this year, but I didn't do much with them, and nothing was ever published.
              </p>
              <p className="text-gray-300">This website, however, is open source (as of writing this blog post)! You can check it out on my GitHub, make sure to also give it a star!</p>
              <p className="text-gray-300">After writing the website, I uploaded it to GitHub, and used GitHub Pages to host it.</p>
              <p className="text-gray-300">In case you need any tutorials for those, some quick Google and YouTube searches should hook you up with some.</p>
              <p className="text-gray-300">GitHub also has a "tutorial" for GitHub pages on <Link href="https://pages.github.com/">their website</Link>.</p>

              <h3 className="text-xl font-bold">Where I got lory.dev</h3>
              <p className="text-gray-300">In case you wanna get a domain yourself, I got mine on namecheap.com, with their privacy protection from whois. I'm also using Cloudflare, to protect my website against DDOS attacks, although I doubt GitHub pages will get DDOSed.</p>
              <p className="text-gray-300">I highly reccomend namecheap, they're a very good service, with fast domain registration and overall very reliable.</p>
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