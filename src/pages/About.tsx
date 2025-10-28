import { MainLayout } from "@/components/layout/MainLayout";
import { Heart, Users, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <MainLayout>
      <div className="container-custom py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-black mb-6 text-center">About ToysWorld</h1>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Your trusted partner in bringing joy and imagination to children worldwide
          </p>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg leading-relaxed mb-6">
              Welcome to ToysWorld, where every toy tells a story and every child's dream comes true. 
              Since our founding, we've been dedicated to providing the highest quality toys, games, 
              and entertainment products that inspire creativity, learning, and endless fun.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Our mission is simple: to be the ultimate destination for parents and children seeking 
              exceptional toys from the world's most trusted brands. We carefully curate our selection 
              to ensure that every product meets our high standards for quality, safety, and educational value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Passion</h3>
              <p className="text-muted-foreground">
                We're passionate about childhood development and believe that play is essential for 
                learning, growth, and happiness.
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-8">
              <div className="bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Community</h3>
              <p className="text-muted-foreground">
                With millions of happy customers, we've built a community of families who trust us 
                for their toy shopping needs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8">
              <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Quality Guarantee</h3>
              <p className="text-muted-foreground">
                Every product we sell meets strict safety standards and comes with our satisfaction 
                guarantee.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Global Reach</h3>
              <p className="text-muted-foreground">
                Serving customers worldwide with fast shipping and excellent customer service in 
                multiple languages.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-black mb-4">Join the ToysWorld Family</h2>
            <p className="text-xl mb-6">
              Experience the magic of quality toys and exceptional service
            </p>
            <p className="text-lg opacity-90">
              Thank you for choosing ToysWorld. We're honored to be part of your family's journey of 
              play, learning, and growth.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
