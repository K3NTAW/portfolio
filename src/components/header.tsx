import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 md:px-6 lg:px-8">
      <div className="flex items-center gap-4">
        <a href="#" className="flex items-center gap-2">
          <span className="text-lg font-bold">My Portfolio</span>
        </a>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="#projects">Projects</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#skills">Skills</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#contact">Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button asChild>
          <a href="/cv.pdf" download>Download CV</a>
        </Button>
        <ModeToggle />
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-4">
              <a
                href="#projects"
                className="text-lg font-medium hover:underline"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-lg font-medium hover:underline"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-lg font-medium hover:underline"
              >
                Contact
              </a>
              <Button asChild>
                <a href="/cv.pdf" download>Download CV</a>
              </Button>
              <ModeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
} 