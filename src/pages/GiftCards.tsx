import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Gift, Heart, Star } from "lucide-react";

const GiftCards = () => {
  const amounts = [25, 50, 100, 250];

  return (
    <MainLayout>
      <div className="container-custom py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Gift className="w-16 h-16 text-accent" />
              <h1 className="text-5xl font-black">Gift Cards</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Give the gift of play! Perfect for any occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
              <div className="relative">
                <h2 className="text-3xl font-black mb-4">ToysWorld</h2>
                <p className="text-xl mb-6">Gift Card</p>
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-4xl font-black">$50.00</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent to-primary rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
              <div className="relative">
                <h2 className="text-3xl font-black mb-4">ToysWorld</h2>
                <p className="text-xl mb-6">Gift Card</p>
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4].map((i) => (
                    <Heart key={i} className="w-5 h-5 fill-white text-white" />
                  ))}
                </div>
                <p className="text-4xl font-black">$100.00</p>
              </div>
            </div>
          </div>

          <div className="bg-card border rounded-2xl p-8">
            <h2 className="text-3xl font-black mb-6 text-center">Choose Your Amount</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  className="bg-muted hover:bg-primary hover:text-primary-foreground transition-all rounded-xl p-6 text-center font-bold text-2xl"
                >
                  ${amount}
                </button>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-sm font-medium mb-2">Recipient Email</label>
                <input
                  type="email"
                  placeholder="recipient@example.com"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Personal Message</label>
                <textarea
                  placeholder="Add a personal message (optional)"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Delivery Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <Button className="w-full btn-primary" size="lg">
              <Gift className="w-5 h-5 mr-2" />
              Purchase Gift Card
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Instant Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Gift cards delivered via email instantly or on your chosen date
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-bold mb-2">Never Expires</h3>
              <p className="text-sm text-muted-foreground">
                Our gift cards never expire, so recipients can shop at their leisure
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold mb-2">Perfect for Everyone</h3>
              <p className="text-sm text-muted-foreground">
                Let them choose their favorite toys from thousands of options
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default GiftCards;
