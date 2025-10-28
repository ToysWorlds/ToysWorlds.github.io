import { MainLayout } from "@/components/layout/MainLayout";
import { ProductCard } from "@/components/products/ProductCard";
import { Sparkles } from "lucide-react";
import productFurby from "@/assets/product-furby.jpg";
import productBarbie from "@/assets/product-barbie.jpg";
import productSpiderman from "@/assets/product-spiderman.jpg";

const NewArrivals = () => {
  const newProducts = [
    {
      id: "2",
      name: "Furby Furblets Luck Edition",
      price: 19.99,
      image: productFurby,
      badge: "new" as const,
    },
    {
      id: "4",
      name: "Barbie Dreamhouse Adventures",
      price: 24.99,
      image: productBarbie,
      badge: "new" as const,
    },
    {
      id: "6",
      name: "Marvel Spider-Man Action Figure",
      price: 34.99,
      image: productSpiderman,
      badge: "new" as const,
    },
  ];

  return (
    <MainLayout>
      <div className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12 mb-8">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-12 h-12" />
            <h1 className="text-5xl font-black">NEW ARRIVALS</h1>
          </div>
          <p className="text-xl">Check out the latest toys just added to our collection!</p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-black mb-2">Just In</h2>
          <p className="text-muted-foreground">Be the first to own these brand new toys!</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...newProducts, ...newProducts].map((product, index) => (
            <ProductCard key={`${product.id}-${index}`} {...product} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default NewArrivals;
