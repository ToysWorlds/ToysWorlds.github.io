import { Link } from "react-router-dom";
import { Search, MapPin, User, Heart, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-3xl font-black tracking-tight">
              Toys<span className="text-accent">World</span>
            </h1>
          </Link>

          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Search for toys, games, and more..."
                className="w-full pl-4 pr-12 py-6 rounded-full bg-white text-foreground border-0"
              />
              <Button
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full"
              >
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden lg:flex text-primary-foreground hover:text-primary-foreground/80">
              <MapPin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden lg:flex text-primary-foreground hover:text-primary-foreground/80">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden lg:flex text-primary-foreground hover:text-primary-foreground/80">
              <Heart className="w-5 h-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary-foreground/80 relative">
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-primary-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <div className="md:hidden mt-4">
          <div className="relative w-full">
            <Input
              type="search"
              placeholder="Search..."
              className="w-full pl-4 pr-12 py-2 rounded-full bg-white text-foreground"
            />
            <Button
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-8 w-8"
            >
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
