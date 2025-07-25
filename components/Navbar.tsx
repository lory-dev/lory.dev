import Link from "next/link";

export function Navbar() {
  return (
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
  );
} 