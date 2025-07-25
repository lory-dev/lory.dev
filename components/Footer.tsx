import Link from "next/link";

export function Footer() {
  return (
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
  );
} 