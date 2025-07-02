"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/products", label: "Products" },
  { href: "/courses", label: "Courses" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ href, label, className, style }: { href: string; label: string; className?: string; style?: React.CSSProperties }) => (
    <Link
      href={href}
      className={cn(
        "transition-colors hover:text-primary",
        pathname === href ? "text-primary" : "text-muted-foreground",
        className
      )}
      style={style}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "border-b border-white/10 bg-background/80 backdrop-blur-lg" : "bg-transparent"
    )}>
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Logo className="h-7 w-auto text-primary" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} className="text-sm font-medium" />
          ))}
        </nav>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden p-2">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="bg-background/95 backdrop-blur-lg w-full h-full p-0 flex flex-col"
            closeButtonClass="hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Logo className="h-7 w-auto text-primary" />
                </Link>
                <Button variant="ghost" onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close Menu</span>
                </Button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-8 p-8">
              {navLinks.map((link, index) => (
                <NavLink 
                    key={link.href} 
                    {...link} 
                    className="text-3xl font-bold opacity-0 animate-fade-in-up" 
                    style={{ animationDelay: `${index * 100 + 200}ms`}}
                />
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}