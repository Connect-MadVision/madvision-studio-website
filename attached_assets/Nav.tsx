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
          variant="ghost"
          onClick={() => handleClick(link.href)}
          className="text-lg font-medium text-white hover:text-[#FF3366]"
        >
          {link.label}
        </Button>
      ))}
    </>
  );

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-sm border-b border-[#00FF00]/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-2xl font-bold text-[#00FF00]">Madvision Studio</div>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex gap-8">
            <NavLinks />
          </div>
        )}
      </div>
    </nav>
  );
}