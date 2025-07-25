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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My social media website made in Next.js</h1>
            <div className="flex items-center gap-4 text-gray-400 mb-8">
              <time>July 25, 2025</time>
              <span>·</span>
              <span>18:40</span>
            </div>

            <br></br>

            <div className="grid gap-6">
              <h2 className="text-2xl font-bold">Howdy</h2>
              <p className="text-gray-300">
                Heya! It's been a while, isn't it?
              </p>
              <p className="text-gray-300">
                I've been working on Liminality, as well as other projects, and I've been kind of neglecting lory.dev.
              </p>
              <p className="text-gray-300">
                I've been learning a lot about Next.js, and every time I go back to my website, I look at how arcaic it is.
                When I started learning Next.js, I only knew how to make client-sided websites (like this one) and I didn't know what components were.
              </p>

              <h3 className="text-xl font-bold">So?</h3>
              <p className="text-gray-300">So, I learned a lot since I first started.</p>
              <p className="text-gray-300">Now, I would like to present a new creation (which will probably be used by like 5 people lmao), a totally original social media website that even I don't know what to call: <a href="https://social.lory.dev" className="text-blue-500">IHateMyLife</a>!</p>
              <p className="text-gray-300">Now featuring:</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Posts and comment threads!</li>
                <li>Images and video!</li>
                <li>DMs!</li>
              </ul>
              
              <p className="text-gray-300">All for the low low price of my sanity!</p>
              <p className="text-gray-300">Jokes aside, I'm not going to release the source code of this at the moment, as it's still in early development and I don't want people to find out the vulnerabilities (if there are any).</p>

              <h3 className="text-xl font-bold">Goodbye</h3>
              <p className="text-gray-300">Enjoy the new website, go wild, don't, your call. I'll see you in the next(.js) one!</p>
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