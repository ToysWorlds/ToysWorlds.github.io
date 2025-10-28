import { MainLayout } from "@/components/layout/MainLayout";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SlidersHorizontal } from "lucide-react";
import productTransformer from "@/assets/product-transformer.jpg";
import productFurby from "@/assets/product-furby.jpg";
import productLego from "@/assets/product-lego.jpg";
import productBarbie from "@/assets/product-barbie.jpg";
import productHotwheels from "@/assets/product-hotwheels.jpg";
import productSpiderman from "@/assets/product-spiderman.jpg";

const Categories = () => {
  const products = [
    {
      id: "1",
      name: "Transformers Collaborative Hot Wheels x Transformers Bone Shaker",
      price: 37.99,
      originalPrice: 44.99,
      image: productTransformer,
      badge: "preorder" as const,
    },
    {
      id: "2",
      name: "Furby Furblets Luck Edition - Interactive Electronic Pet Toy with Voice Recognition",
      price: 19.99,
      image: productFurby,
      badge: "new" as const,
    },
    {
      id: "3",
      name: "LEGO City Construction Vehicles Building Set with Crane and Dump Truck",
      price: 89.99,
      originalPrice: 109.99,
      image: productLego,
      badge: "sale" as const,
    },
    {
      id: "4",
      name: "Barbie Dreamhouse Adventures Deluxe Playset with Furniture and Accessories",
      price: 24.99,
      image: productBarbie,
    },
    {
      id: "5",
      name: "Hot Wheels Ultimate Garage Mega Playset with Loop Track",
      price: 129.99,
      originalPrice: 159.99,
      image: productHotwheels,
      badge: "sale" as const,
    },
    {
      id: "6",
      name: "Marvel Spider-Man Web Slinger Action Figure with Accessories",
      price: 34.99,
      image: productSpiderman,
    },
    {
      id: "7",
      name: "LEGO Star Wars Millennium Falcon Ultimate Collector Series Building Kit",
      price: 169.99,
      image: productLego,
      badge: "new" as const,
    },
    {
      id: "8",
      name: "Barbie Color Reveal Doll with Surprise Fashion and Accessories",
      price: 29.99,
      image: productBarbie,
    },
    {
      id: "9",
      name: "Hot Wheels Monster Truck Mega Wrex Battle Set with Smashable Car",
      price: 49.99,
      originalPrice: 64.99,
      image: productHotwheels,
      badge: "sale" as const,
    },
    {
      id: "10",
      name: "LEGO Creator Expert Roller Coaster Building Set with Motor",
      price: 399.99,
      image: productLego,
      badge: "new" as const,
    },
    {
      id: "11",
      name: "Transformers Bumblebee Cyberverse Adventures Action Figure",
      price: 29.99,
      originalPrice: 39.99,
      image: productTransformer,
      badge: "sale" as const,
    },
    {
      id: "12",
      name: "Marvel Legends Spider-Man 6-Inch Premium Collectible Action Figure",
      price: 44.99,
      image: productSpiderman,
      badge: "new" as const,
    },
    {
      id: "13",
      name: "Barbie Fashionistas Doll with Fashion and Accessories Assortment",
      price: 14.99,
      image: productBarbie,
    },
    {
      id: "14",
      name: "LEGO Architecture Skyline Collection New York City Building Kit",
      price: 59.99,
      image: productLego,
    },
    {
      id: "15",
      name: "Hot Wheels Track Builder Unlimited Builder Pack with Motorized Booster",
      price: 79.99,
      originalPrice: 99.99,
      image: productHotwheels,
      badge: "sale" as const,
    },
    {
      id: "16",
      name: "Furby Connect Interactive Bluetooth Electronic Pet with App",
      price: 89.99,
      image: productFurby,
      badge: "preorder" as const,
    },
  ];

  return (
    <MainLayout>
      <div className="container-custom py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-black mb-2">All Categories</h1>
          <p className="text-muted-foreground">Browse our complete collection of amazing toys</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Button variant="outline" className="md:w-auto">
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <Select defaultValue="featured">
            <SelectTrigger className="md:w-[200px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="rating">Best Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            <Button variant="outline">Previous</Button>
            <Button variant="default">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Categories;
