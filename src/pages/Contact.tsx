import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <MainLayout>
      <div className="container-custom py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              We'd love to hear from you! Reach out with any questions or concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-black mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="How can we help?" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us more about your inquiry..."
                    className="min-h-[150px]"
                  />
                </div>
                <Button className="w-full btn-primary" size="lg">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-black mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email Us</h3>
                    <p className="text-muted-foreground">support@toysworld.com</p>
                    <p className="text-muted-foreground">sales@toysworld.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-secondary text-secondary-foreground w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Call Us</h3>
                    <p className="text-muted-foreground">+1 (800) TOY-SHOP</p>
                    <p className="text-muted-foreground">+1 (800) 869-7467</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">123 Toy Street</p>
                    <p className="text-muted-foreground">Fun City, FC 12345</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 9am - 8pm</p>
                    <p className="text-muted-foreground">Saturday: 10am - 6pm</p>
                    <p className="text-muted-foreground">Sunday: 11am - 5pm</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-3">Quick Support</h3>
                <p className="text-muted-foreground mb-4">
                  For immediate assistance, check out our FAQ page or chat with our support team during business hours.
                </p>
                <Button variant="outline" className="w-full">
                  View FAQs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
