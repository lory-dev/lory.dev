import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, Code, Gamepad2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import liminality1 from '../img/liminality1.png'
import lorydev from '../img/lorydev.png'
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Navbar />

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
              <h3 className="text-xl text-neutral-50 font-bold mb-4">My social media website made in Next.js</h3>
              <h2 className="text-gray-500 text-xs">July 25, 2025 18:40</h2>
              <p className="text-gray-400 mb-4">
                Updates + my new Next.js project
              </p>
              <Button variant="outline" asChild>
                <Link href="/blog/3">Read More</Link>
              </Button>
            </Card>
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
      <Footer />
    </div>
  )
}
