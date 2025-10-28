import { MainLayout } from "@/components/layout/MainLayout";

const Cookies = () => {
  return (
    <MainLayout>
      <div className="container-custom py-12">
        <h1 className="text-4xl font-black mb-8">Cookie Policy</h1>
        
        <div className="prose max-w-4xl">
          <p className="text-muted-foreground mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              understanding how you use our site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold mb-3">Essential Cookies</h3>
            <p className="mb-4">
              These cookies are necessary for the website to function properly. They enable core functionality 
              such as security, network management, and accessibility.
            </p>

            <h3 className="text-xl font-semibold mb-3">Performance Cookies</h3>
            <p className="mb-4">
              These cookies collect information about how visitors use our website, such as which pages are 
              visited most often. This helps us improve how our website works.
            </p>

            <h3 className="text-xl font-semibold mb-3">Functionality Cookies</h3>
            <p className="mb-4">
              These cookies allow the website to remember choices you make and provide enhanced features. 
              They may be used to remember your login details or language preference.
            </p>

            <h3 className="text-xl font-semibold mb-3">Marketing Cookies</h3>
            <p className="mb-4">
              These cookies track your online activity to help advertisers deliver more relevant advertising 
              or limit how many times you see an ad.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
            <p className="mb-4">
              You can control and manage cookies in various ways. Most browsers allow you to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific sites</li>
              <li>Block all cookies</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            <p className="mb-4">
              Please note that blocking all cookies may impact your experience on our website and prevent 
              you from using certain features.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
            <p className="mb-4">
              Some cookies on our site are placed by third-party services that appear on our pages. We do 
              not control these cookies. Please check the third-party websites for more information about 
              their cookies and how to manage them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
            <p className="mb-4">
              We may update this Cookie Policy from time to time to reflect changes in technology or 
              legislation. Please check this page regularly for updates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our use of cookies, please contact us through our Contact 
              page or email us at privacy@toysworld.com.
            </p>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cookies;
