import { MainLayout } from "@/components/layout/MainLayout";

const Terms = () => {
  return (
    <MainLayout>
      <div className="container-custom py-12">
        <h1 className="text-4xl font-black mb-8">Terms of Service</h1>
        
        <div className="prose max-w-4xl">
          <p className="text-muted-foreground mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using this website, you accept and agree to be bound by these Terms of Service 
              and our Privacy Policy. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Use of Website</h2>
            <p className="mb-4">You agree to use our website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Use the website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Use any automated system to access the website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Product Information</h2>
            <p className="mb-4">
              We strive to provide accurate product descriptions and pricing. However, we do not warrant that 
              product descriptions, pricing, or other content is accurate, complete, or error-free. We reserve 
              the right to correct errors and change information without prior notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Orders and Payment</h2>
            <p className="mb-4">
              All orders are subject to acceptance and availability. We reserve the right to refuse or cancel 
              any order for any reason. Payment must be received before orders are processed. Prices are subject 
              to change without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Shipping and Delivery</h2>
            <p className="mb-4">
              Shipping times are estimates and not guaranteed. We are not responsible for delays caused by 
              shipping carriers or circumstances beyond our control. Risk of loss passes to you upon delivery 
              to the carrier.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Returns and Refunds</h2>
            <p className="mb-4">
              Our return policy allows returns within 30 days of purchase for most items. Products must be 
              unused and in original packaging. See our Returns & Exchanges page for complete details.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Intellectual Property</h2>
            <p className="mb-4">
              All content on this website, including text, graphics, logos, images, and software, is the 
              property of ToysWorld or its content suppliers and is protected by copyright and trademark laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">
              To the fullest extent permitted by law, ToysWorld shall not be liable for any indirect, 
              incidental, special, or consequential damages arising out of or in connection with your use 
              of the website or purchase of products.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective 
              immediately upon posting. Your continued use of the website constitutes acceptance of the 
              modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms of Service, please contact us through our Contact page or 
              email us at legal@toysworld.com.
            </p>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default Terms;
