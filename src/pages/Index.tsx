import { MainLayout } from "@/components/layout/MainLayout";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Zap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";
import productTransformer from "@/assets/product-transformer.jpg";
import productFurby from "@/assets/product-furby.jpg";
import productLego from "@/assets/product-lego.jpg";
import productBarbie from "@/assets/product-barbie.jpg";
import productHotwheels from "@/assets/product-hotwheels.jpg";
import productSpiderman from "@/assets/product-spiderman.jpg";

const Index = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Transformers Collaborative Hot Wheels x Transformers Bone Shaker",
      price: 37.99,
      originalPrice: 44.99,
      image: productTransformer,
      badge: "preorder" as const,
      badgeText: "Pre-Order",
    },
    {
      id: "2",
      name: "Furby Furblets Luck Edition - Adorable Interactive Pet",
      price: 19.99,
      image: productFurby,
      badge: "new" as const,
    },
    {
      id: "3",
      name: "LEGO City Construction Vehicles Building Set",
      price: 89.99,
      originalPrice: 109.99,
      image: productLego,
      badge: "sale" as const,
      badgeText: "20% Off",
    },
    {
      id: "4",
      name: "Barbie Dreamhouse Adventures Deluxe Fashion Doll",
      price: 24.99,
      image: productBarbie,
      badge: "new" as const,
    },
    {
      id: "5",
      name: "Hot Wheels Ultimate Garage Playset with Track",
      price: 129.99,
      originalPrice: 159.99,
      image: productHotwheels,
      badge: "sale" as const,
    },
    {
      id: "6",
      name: "Marvel Spider-Man Web Slinger Action Figure",
      price: 34.99,
      image: productSpiderman,
      badge: "preorder" as const,
    },
  ];

  return (
    <MainLayout>
      {/* Hero Banner */}
      <section className="container-custom py-6">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
          <img
            src={heroBanner}
            alt="Holiday Promo - Nintendo Switch"
            className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent">
            <div className="container-custom h-full flex items-center">
              <div className="text-white max-w-xl">
                <h2 className="text-4xl md:text-5xl font-black mb-4">Happy Holidays!</h2>
                <p className="text-xl md:text-2xl mb-6">
                  Spend $80 and stand a chance to win a Nintendo Switch 2 Console!
                </p>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold">
                  Shop Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Order Section */}
      <section className="container-custom py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black mb-2">Pre-Order the Latest Toys Now!</h2>
            <p className="text-muted-foreground">Be the first to get the hottest new releases</p>
          </div>
          <Link to="/pre-order">
            <Button variant="outline" className="hidden md:flex">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">Free shipping on orders over $80</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Exclusive Deals</h3>
              <p className="text-muted-foreground">Members get special discounts & early access</p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
              <p className="text-muted-foreground">Authentic toys from trusted brands</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container-custom py-12">
        <h2 className="text-3xl font-black mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Action Figures", color: "from-blue-500 to-purple-500" },
            { name: "Dolls & Playsets", color: "from-pink-500 to-rose-500" },
            { name: "Building Toys", color: "from-orange-500 to-red-500" },
            { name: "Educational", color: "from-green-500 to-teal-500" },
          ].map((category) => (
            <Link
              key={category.name}
              to="/categories"
              className="group relative rounded-xl overflow-hidden h-48 shadow-lg hover:shadow-xl transition-all"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
              <div className="relative h-full flex items-center justify-center">
                <h3 className="text-white text-xl font-bold text-center px-4">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Sale Banner */}
      <section className="container-custom py-12">
        <div className="bg-gradient-to-r from-sale to-destructive rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Clearance Sale!</h2>
          <p className="text-xl md:text-2xl mb-6">Up to 50% off on selected items</p>
          <Link to="/sale">
            <Button size="lg" variant="secondary" className="font-bold">
              Shop Sale <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
