import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const categories = [
    "Action Figures",
    "Dolls & Playsets",
    "Building & Construction",
    "Educational Toys",
    "Outdoor Play",
    "Arts & Crafts",
  ];

  const brands = [
    "LEGO",
    "Barbie",
    "Hot Wheels",
    "Marvel",
    "Disney",
    "Hasbro",
  ];

  return (
    <nav className="bg-primary/95 border-t border-primary-foreground/10">
      <div className="container-custom">
        <NavigationMenu className="max-w-none justify-start">
          <NavigationMenuList className="flex-wrap gap-1">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10 data-[state=open]:bg-primary-foreground/10">
                CATEGORIES
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      to="/categories"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">{category}</div>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10 data-[state=open]:bg-primary-foreground/10">
                BRANDS
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {brands.map((brand) => (
                    <Link
                      key={brand}
                      to="/brands"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">{brand}</div>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10 data-[state=open]:bg-primary-foreground/10">
                AGE
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[300px] gap-3 p-4">
                  {["0-2 years", "3-5 years", "6-8 years", "9-11 years", "12+ years"].map((age) => (
                    <Link
                      key={age}
                      to="/categories"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">{age}</div>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/sale"
                className={`inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-foreground/10 focus:bg-primary-foreground/10 ${
                  isActive("/sale") ? "bg-primary-foreground/10" : ""
                }`}
              >
                <span className="text-sale-foreground bg-sale px-2 py-0.5 rounded font-bold">SALE</span>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/new"
                className={`inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-foreground/10 focus:bg-primary-foreground/10 ${
                  isActive("/new") ? "bg-primary-foreground/10" : ""
                }`}
              >
                NEW
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/pre-order"
                className={`inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-foreground/10 focus:bg-primary-foreground/10 ${
                  isActive("/pre-order") ? "bg-primary-foreground/10" : ""
                }`}
              >
                PRE-ORDER
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/gift-cards"
                className={`inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-foreground/10 focus:bg-primary-foreground/10 ${
                  isActive("/gift-cards") ? "bg-primary-foreground/10" : ""
                }`}
              >
                GIFT CARDS
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};
