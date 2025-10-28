import { MainLayout } from "@/components/layout/MainLayout";
import { Truck, Clock, MapPin } from "lucide-react";

const Shipping = () => {
  return (
    <MainLayout>
      <div className="container-custom py-12">
        <h1 className="text-4xl font-black mb-8">Shipping & Delivery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-muted p-6 rounded-xl text-center">
            <Truck className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-bold mb-2">Free Shipping</h3>
            <p className="text-sm text-muted-foreground">On orders over $80</p>
          </div>
          <div className="bg-muted p-6 rounded-xl text-center">
            <Clock className="w-12 h-12 mx-auto mb-4 text-secondary" />
            <h3 className="font-bold mb-2">Fast Delivery</h3>
            <p className="text-sm text-muted-foreground">3-5 business days</p>
          </div>
          <div className="bg-muted p-6 rounded-xl text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h3 className="font-bold mb-2">Track Your Order</h3>
            <p className="text-sm text-muted-foreground">Real-time updates</p>
          </div>
        </div>

        <div className="prose max-w-4xl">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Shipping Methods</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Standard Shipping (3-5 business days)</h3>
                <p className="text-muted-foreground">$8.99 for orders under $80 | FREE for orders over $80</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Express Shipping (1-2 business days)</h3>
                <p className="text-muted-foreground">$15.99 for all orders</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Next Day Delivery</h3>
                <p className="text-muted-foreground">$24.99 for orders placed before 2 PM</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Processing Time</h2>
            <p className="mb-4">
              Orders are typically processed within 1-2 business days. You will receive a confirmation email 
              with tracking information once your order has shipped.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Delivery Areas</h2>
            <p className="mb-4">
              We currently ship to all addresses within Singapore. For international shipping inquiries, 
              please contact our customer service team.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Order Tracking</h2>
            <p className="mb-4">
              Once your order ships, you'll receive a tracking number via email. You can also track your 
              order status by logging into your account and viewing your order history.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Pre-Order Items</h2>
            <p className="mb-4">
              Pre-order items will ship as soon as they become available. Estimated release dates are 
              provided on product pages. If your order contains both in-stock and pre-order items, we 
              can split your shipment at no extra cost.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Shipping Restrictions</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>We do not ship to PO boxes for certain oversized items</li>
              <li>Some items may have shipping restrictions due to size or weight</li>
              <li>Delivery to remote areas may require additional time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Delivery Issues</h2>
            <p className="mb-4">
              If you experience any issues with your delivery, please contact us immediately at 
              shipping@toysworld.com or through our Contact page. We're here to help resolve any problems.
            </p>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default Shipping;
