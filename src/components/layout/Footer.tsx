import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-muted-foreground hover:text-primary transition-colors">Shipping & Delivery</Link></li>
              <li><Link to="/returns" className="text-muted-foreground hover:text-primary transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link to="/track-order" className="text-muted-foreground hover:text-primary transition-colors">Track Your Order</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/stores" className="text-muted-foreground hover:text-primary transition-colors">Store Locations</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/sale" className="text-muted-foreground hover:text-primary transition-colors">Sale</Link></li>
              <li><Link to="/new" className="text-muted-foreground hover:text-primary transition-colors">New Arrivals</Link></li>
              <li><Link to="/brands" className="text-muted-foreground hover:text-primary transition-colors">Top Brands</Link></li>
              <li><Link to="/gift-cards" className="text-muted-foreground hover:text-primary transition-colors">Gift Cards</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">Subscribe to get special offers and updates!</p>
            <div className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                <Mail className="w-5 h-5" />
              </button>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ToysWorld. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link to="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
