import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Cart = () => {
  const { items: cartItems, updateQuantity, removeFromCart, subtotal } = useCart();
  
  const shipping = subtotal >= 80 ? 0 : 8.99;
  const total = subtotal + shipping;

  return (
    <MainLayout>
      <div className="container-custom py-8">
        <h1 className="text-4xl font-black mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag className="w-24 h-24 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Start shopping to add items to your cart</p>
            <Link to="/categories">
              <Button size="lg">Browse Products</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-card border rounded-xl p-6 flex gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold mb-2">{item.name}</h3>
                    <p className="text-xl font-bold text-sale mb-4">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Button 
                          size="icon" 
                          variant="outline" 
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button 
                          size="icon" 
                          variant="outline" 
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-destructive"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-muted rounded-xl p-6 sticky top-24">
                <h2 className="text-2xl font-black mb-6">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-semibold">
                      {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {subtotal < 80 && subtotal > 0 && (
                    <p className="text-sm text-accent">
                      Add ${(80 - subtotal).toFixed(2)} more for free shipping!
                    </p>
                  )}
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full btn-primary mb-3" size="lg">
                  Proceed to Checkout
                </Button>
                <Link to="/categories">
                  <Button variant="outline" className="w-full" size="lg">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Cart;
