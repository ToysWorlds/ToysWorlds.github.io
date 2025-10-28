import { MainLayout } from "@/components/layout/MainLayout";
import { ProductCard } from "@/components/products/ProductCard";
import { Percent } from "lucide-react";
import productTransformer from "@/assets/product-transformer.jpg";
import productLego from "@/assets/product-lego.jpg";
import productHotwheels from "@/assets/product-hotwheels.jpg";

const Sale = () => {
  const saleProducts = [
    {
      id: "1",
      name: "Transformers Collaborative Hot Wheels",
      price: 37.99,
      originalPrice: 44.99,
      image: productTransformer,
      badge: "sale" as const,
      badgeText: "16% Off",
    },
    {
      id: "3",
      name: "LEGO City Construction Vehicles",
      price: 89.99,
      originalPrice: 109.99,
      image: productLego,
      badge: "sale" as const,
      badgeText: "18% Off",
    },
    {
      id: "5",
      name: "Hot Wheels Ultimate Garage",
      price: 129.99,
      originalPrice: 159.99,
      image: productHotwheels,
      badge: "sale" as const,
      badgeText: "19% Off",
    },
  ];

  return (
    <MainLayout>
      <div className="bg-gradient-to-r from-sale to-destructive text-white py-12 mb-8">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Percent className="w-12 h-12" />
            <h1 className="text-5xl font-black">MEGA SALE</h1>
          </div>
          <p className="text-xl">Save up to 50% on selected toys and games!</p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-black mb-2">Hot Deals</h2>
          <p className="text-muted-foreground">Limited time offers - grab them before they're gone!</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...saleProducts, ...saleProducts].map((product, index) => (
            <ProductCard key={`${product.id}-${index}`} {...product} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Sale;
