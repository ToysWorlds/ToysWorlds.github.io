import { MainLayout } from "@/components/layout/MainLayout";
import { ProductCard } from "@/components/products/ProductCard";
import { Clock } from "lucide-react";
import productTransformer from "@/assets/product-transformer.jpg";
import productSpiderman from "@/assets/product-spiderman.jpg";

const PreOrder = () => {
  const preOrderProducts = [
    {
      id: "1",
      name: "Transformers Collaborative Hot Wheels",
      price: 37.99,
      originalPrice: 44.99,
      image: productTransformer,
      badge: "preorder" as const,
      badgeText: "Pre-Order",
    },
    {
      id: "6",
      name: "Marvel Spider-Man Web Slinger",
      price: 34.99,
      image: productSpiderman,
      badge: "preorder" as const,
    },
  ];

  return (
    <MainLayout>
      <div className="bg-gradient-to-r from-accent to-primary text-white py-12 mb-8">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-12 h-12" />
            <h1 className="text-5xl font-black">PRE-ORDER NOW</h1>
          </div>
          <p className="text-xl">Reserve the hottest upcoming toys before they sell out!</p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-black mb-2">Coming Soon</h2>
          <p className="text-muted-foreground">Secure your order today and be first to receive these exciting new releases</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...preOrderProducts, ...preOrderProducts, ...preOrderProducts].map((product, index) => (
            <ProductCard key={`${product.id}-${index}`} {...product} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default PreOrder;
