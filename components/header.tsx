import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="container mx-auto flex max-w-3xl items-center justify-center">
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold">
            SS
          </Link>
          <ul className="flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10">
            <li className="transition-colors hover:text-foreground">
              <Link href="/about">About</Link>
            </li>
            <li className="transition-colors hover:text-foreground">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="transition-colors hover:text-foreground">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          <div>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
