import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import websitebanner from '../../img/lorydev.png'
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

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

      {/* Footer */}
      <Footer />
    </div>
  )
}