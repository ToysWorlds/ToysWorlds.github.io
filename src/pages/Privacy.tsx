import { MainLayout } from "@/components/layout/MainLayout";

const Privacy = () => {
  return (
    <MainLayout>
      <div className="container-custom py-12">
        <h1 className="text-4xl font-black mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-4xl">
          <p className="text-muted-foreground mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information that you provide directly to us, including when you create an account, 
              make a purchase, sign up for our newsletter, or contact customer service. This may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name and contact information (email address, phone number, shipping address)</li>
              <li>Payment information (processed securely through our payment providers)</li>
              <li>Order history and preferences</li>
              <li>Communications with our customer service team</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Process and fulfill your orders</li>
              <li>Send you order confirmations and updates</li>
              <li>Respond to your questions and provide customer support</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Prevent fraud and enhance security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
            <p className="mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Service providers who help us operate our business</li>
              <li>Shipping carriers to deliver your orders</li>
              <li>Payment processors to handle transactions</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
              <li>Object to processing of your personal information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Cookies and Tracking</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to improve your browsing experience, 
              analyze site traffic, and personalize content. See our Cookie Policy for more details.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
            <p className="mb-4">
              While we sell toys for children, our website is intended for use by adults. We do not 
              knowingly collect personal information from children under 13 without parental consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy or how we handle your information, 
              please contact us through our Contact page or email us at privacy@toysworld.com.
            </p>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default Privacy;
