import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Heart, Share2, ShoppingCart, Star, Truck, Shield } from "lucide-react";
import { useParams } from "react-router-dom";
import { ProductCard } from "@/components/products/ProductCard";
import productTransformer from "@/assets/product-transformer.jpg";
import productFurby from "@/assets/product-furby.jpg";
import productLego from "@/assets/product-lego.jpg";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = {
    id: "1",
    name: "Transformers Collaborative Hot Wheels x Transformers Bone Shaker",
    price: 37.99,
    originalPrice: 44.99,
    image: productTransformer,
  };

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const relatedProducts = [
    {
      id: "2",
      name: "Furby Furblets Luck Edition",
      price: 19.99,
      image: productFurby,
    },
    {
      id: "3",
      name: "LEGO City Construction Set",
      price: 89.99,
      originalPrice: 109.99,
      image: productLego,
      badge: "sale" as const,
    },
  ];

  return (
    <MainLayout>
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="bg-muted rounded-2xl overflow-hidden mb-4">
              <img
                src={productTransformer}
                alt="Product"
                className="w-full h-auto"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-muted rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                  <img
                    src={productTransformer}
                    alt={`Thumbnail ${i}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex gap-2 mb-4">
              <span className="badge-preorder">Pre-Order</span>
              <span className="badge-sale">Reduced</span>
            </div>

            <h1 className="text-3xl font-black mb-4">
              Transformers Collaborative Hot Wheels x Transformers Bone Shaker
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-muted-foreground">(128 reviews)</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-black text-sale">$37.99</span>
              <span className="text-2xl text-muted-foreground line-through">$44.99</span>
              <span className="badge-sale">Save 16%</span>
            </div>

            <p className="text-muted-foreground mb-6">
              Experience the ultimate collaboration between Hot Wheels and Transformers! 
              This exclusive Bone Shaker transforms from a fierce hot rod into a powerful robot warrior. 
              Perfect for collectors and fans alike, featuring authentic Hot Wheels styling and detailed Transformers articulation.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm">
                <Truck className="w-5 h-5 text-secondary" />
                <span>Free delivery on orders over $80</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield className="w-5 h-5 text-secondary" />
                <span>Quality guaranteed - 30 day returns</span>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <Button size="lg" className="flex-1 btn-primary" onClick={handleAddToCart}>
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            <div className="bg-muted p-6 rounded-xl">
              <h3 className="font-bold mb-3">Product Details</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Brand:</strong> Transformers x Hot Wheels</li>
                <li><strong>Age Range:</strong> 8 years and up</li>
                <li><strong>Material:</strong> High-quality plastic</li>
                <li><strong>Dimensions:</strong> 6.5 x 2.5 x 4 inches</li>
                <li><strong>Release Date:</strong> Early December 2025</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-black mb-6">Customer Reviews</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((review) => (
              <div key={review} className="bg-card p-6 rounded-xl border">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <h4 className="font-bold">Amazing toy!</h4>
                  </div>
                  <span className="text-sm text-muted-foreground">2 days ago</span>
                </div>
                <p className="text-muted-foreground">
                  My son absolutely loves this! The transformation mechanism is smooth and the quality is excellent. 
                  Highly recommend for any Transformers or Hot Wheels fan.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-black mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
