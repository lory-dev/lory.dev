import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import websitebanner from '../../img/social.png'
import feature1 from '../../img/socialprofilepage.png'
import feature2 from '../../img/socialthread.png'
import feature3 from '../../img/socialabsolutecinema.png'
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">social.lory.dev</h1>
              <p className="text-xl text-gray-400">
                My social media website
              </p>
            </div>

            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src={websitebanner}
                alt="Screenshot"
                className="object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" className="gap-2">
                <ExternalLink className="w-4 h-4" />
                <Link href="https://social.lory.dev">Website Link</Link>
              </Button>
              {/*
              <Button  variant="secondary" className="gap-2">
                <Github className="w-4 h-4" />
                <Link href="https://github.com/legacy.lory.dev">Source Code</Link>
              </Button>
              */}
            </div>

            <div className="grid gap-6">
              <h2 className="text-2xl font-bold">About the Project</h2>
              <p className="text-gray-400">
                This is my new social media website/webapp that is literally like any other social media you've ever seen but with worse algorithm and few posts so you'll be entertained for about 5 minutes!
              </p>

              <h3 className="text-2xl font-bold">Features</h3>
              <h2 className="text-lg font-bold">Profile Pages!</h2>
              <div className="relative rounded-lg overflow-hidden w-[80%]">
              <Image
                src={feature1}
                alt="Screenshot"
                className="object-cover"
              />
              </div>
              <h2 className="text-lg font-bold">Unusually long comment threads!</h2>
              <div className="relative rounded-lg overflow-hidden w-[50%]">
              <Image
                src={feature2}
                alt="Screenshot"
                className="object-cover"
              />
              </div>
              <h2 className="text-xl font-wingdings">ABSOLUTE CINEMA</h2>
              <div className="relative rounded-lg overflow-hidden w-[50%]">
              <Image
                src={feature3}
                alt="Screenshot"
                className="object-cover"
              />
              </div>
            </div>

          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}