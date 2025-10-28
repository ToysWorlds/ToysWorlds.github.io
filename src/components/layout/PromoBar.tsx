import { Link } from "react-router-dom";
import { Truck, Package } from "lucide-react";

export const PromoBar = () => {
  return (
    <div className="bg-secondary text-secondary-foreground py-2 text-sm">
      <div className="container-custom">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <Link to="/shipping" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Truck className="w-4 h-4" />
            <span className="font-medium">Free delivery with $80 or above</span>
          </Link>
          <Link to="/click-collect" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Package className="w-4 h-4" />
            <span className="font-medium">Buy online & collect in store with Click & Collect</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
