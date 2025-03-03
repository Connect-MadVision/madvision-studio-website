import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#games", label: "Games" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const isMobile = useIsMobile();
  const [_, setLocation] = useLocation();

  const handleClick = (href: string) => {
    setLocation(href);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const NavLinks = () => (
    <>
      {LINKS.map((link) => (
        <Button
          key={link.href}
          variant="link"
          onClick={() => handleClick(link.href)}
          className="text-base font-medium text-white/80 hover:text-[#00FF00] transition-colors duration-200"
        >
          {link.label}
        </Button>
      ))}
    </>
  );

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/90 backdrop-blur-md border-b border-[#00FF00]/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00FF00] to-[#FF0000] flex items-center justify-center">
            <span className="text-lg font-bold text-white">M</span>
          </div>
          <span className="text-xl font-bold text-white">Madvision</span>
        </div>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:text-[#00FF00]">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-black/95 border-l border-[#00FF00]/10">
              <div className="flex flex-col gap-6 mt-12">
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-8">
            <NavLinks />
          </div>
        )}
      </div>
    </nav>
  );
}