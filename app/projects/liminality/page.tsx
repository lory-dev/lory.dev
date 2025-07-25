import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import liminalitybanner from '../../img/liminalitybanner.png'
import liminality1 from '../../img/liminality1.png'
import liminality2 from '../../img/liminality2.png'
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Liminality</h1>
              <p className="text-xl text-gray-400">
                Dive into the world of Liminality and uncover the secrets within.
              </p>
            </div>

            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src={liminalitybanner}
                alt="Game Screenshot"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" className="gap-2">
                <ExternalLink className="w-4 h-4" />
                <Link href="https://store.steampowered.com/app/2916260/Liminality">Game Link</Link>
              </Button>
              <Button variant="secondary" className="gap-2">
                <Link href="https://games.lory.dev/games/liminality">Games Page</Link>
              </Button>
              <Button  variant="secondary" className="gap-2" disabled>
                <Github className="w-4 h-4" />
                Source Code
              </Button>
            </div>

            <div className="grid gap-6">
              <h2 className="text-2xl font-bold">About the Project</h2>
              <p className="text-gray-400">
                Liminality is a new game that immerses you into the world of Liminal Spaces.
                <br />
                <br />
                You wake up, but something’s wrong. Instead of your room, you’re in a strange, quiet place filled with endless pools and dim hallways. The air smells like chlorine, and the silence is almost too loud. This isn’t just a weird dream—you're inside a simulation.
                <br />
                <br />
                As you explore, the eerie Poolrooms seem to stretch on forever. Faded tiles, still water, and fluorescent lights create a surreal, almost haunting atmosphere. Strange messages and signs of others who were trapped here hint at a deeper mystery.
                <br />
                <br />
                Your memories start to blur with the simulation, and you begin to question what's real. Can you find a way out, or will you be lost in this maze forever?
              </p>

              <h3 className="text-xl font-bold">Technical Details</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Built with Unreal Engine 5</li>
                <li>Makes use of Lumen for most of the current chapters</li>
              </ul>

              <h3 className="text-xl font-bold">Release Date</h3>
              <p className="text-gray-400">
                Liminality is releasing on April 20th, 2025 fully (with planned content updates).
              </p>

              <h3 className="text-xl font-bold">Development Process</h3>
              <p className="text-gray-400">
                The development process started around february/march, but the actual idea came to me over four months before, when I was
                just thinking about what I could do after my previous projects.
                <br /> 
                <br />The game was eventually revealed in April, when I was sure that it wasn't going to be a scrapped project, and released in Early Access on September 1st.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Image
                src={liminality1}
                alt="Screenshot 1"
                width={500}
                height={300}
                className="rounded-lg"
              />
              <Image
                src={liminality2}
                alt="Screenshot 2"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}