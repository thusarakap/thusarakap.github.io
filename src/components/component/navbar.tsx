import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC, JSX, SVGProps } from "react";
import { ModeToggle } from "../ui/mode-toggle";

export const Navbar: FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <Link
          href="#"
          className="flex items-center gap-4 text-xl font-semibold"
          prefetch={false}
        >
          <CodeIcon className="h-6 w-6 text-primary/90" />
          <span>Thusaraka Palliyeguru</span>
        </Link>
        <nav className="hidden space-x-4 md:flex ">
          <Link
            href="#about"
            className="text-xl font-semibold transition-colors hover:text-primary/60"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#skills"
            className="text-xl font-semibold transition-colors hover:text-primary/60"
            prefetch={false}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-xl font-semibold transition-colors hover:text-primary/60"
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-xl font-semibold transition-colors hover:text-primary/60"
            prefetch={false}
          >
            Contact
          </Link>
          <div className="navbar-mode-toggle">
            <ModeToggle />
          </div>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full md:hidden" aria-label="Toggle navigation menu">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-4 py-6">
              <Link href="#" className="flex w-full items-center py-3 text-2xl font-semibold" prefetch={false}>
                Home
              </Link>
              <Link href="#about" className="flex w-full items-center py-3 text-2xl font-semibold" prefetch={false}>
                About
              </Link>
              <Link href="#skills" className="flex w-full items-center py-3 text-2xl font-semibold" prefetch={false}>
                Skills
              </Link>
              <Link href="#skills" className="flex w-full items-center py-3 text-2xl font-semibold" prefetch={false}>
                Projects
              </Link>
              <Link href="#contact" className="flex w-full items-center py-3 text-2xl font-semibold" prefetch={false}>
                Contact
              </Link>
              <ModeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const MenuIcon: FC<IconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
};

function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}