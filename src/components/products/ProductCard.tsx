import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: "sale" | "preorder" | "new";
  badgeText?: string;
}

export const ProductCard = ({ id, name, price, originalPrice, image, badge, badgeText }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  return (
    <div className="card-product group">
      <Link to={`/product/${id}`} className="block relative">
        {badge && (
          <div className="absolute top-2 left-2 z-10">
            {badge === "sale" && <span className="badge-sale">{badgeText || "Sale"}</span>}
            {badge === "preorder" && <span className="badge-preorder">{badgeText || "Pre-Order"}</span>}
            {badge === "new" && <span className="badge-new">{badgeText || "New"}</span>}
          </div>
        )}
        <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full w-9 h-9"
            onClick={(e) => {
              e.preventDefault();
              // Add to wishlist logic
            }}
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold text-sm mb-2 line-clamp-2 hover:text-primary transition-colors min-h-[2.5rem]">
            {name}
          </h3>
        </Link>
        <div className="flex items-center gap-2 mb-3">
          {originalPrice && (
            <span className="text-muted-foreground line-through text-sm">
              ${originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-lg font-bold text-sale">
            ${price.toFixed(2)}
          </span>
        </div>
        <Button className="w-full btn-primary" size="sm" onClick={handleAddToCart}>
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
