import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

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

      <Footer />
    </div>
  )
}