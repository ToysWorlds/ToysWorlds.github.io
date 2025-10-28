import { MainLayout } from "@/components/layout/MainLayout";
import { RefreshCw, CheckCircle, AlertCircle } from "lucide-react";

const Returns = () => {
  return (
    <MainLayout>
      <div className="container-custom py-12">
        <h1 className="text-4xl font-black mb-8">Returns & Exchanges</h1>
        
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 mb-12">
          <div className="flex items-center gap-4 mb-4">
            <RefreshCw className="w-12 h-12 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">30-Day Return Policy</h2>
              <p className="text-muted-foreground">We want you to be completely satisfied with your purchase</p>
            </div>
          </div>
        </div>

        <div className="prose max-w-4xl">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Return Eligibility</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="border border-green-500 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <h3 className="font-semibold">Eligible for Return</h3>
                </div>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>Unused items in original packaging</li>
                  <li>Items with all tags attached</li>
                  <li>Defective or damaged products</li>
                  <li>Items received in error</li>
                </ul>
              </div>
              <div className="border border-red-500 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <h3 className="font-semibold">Not Eligible for Return</h3>
                </div>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>Items without original packaging</li>
                  <li>Used or opened items (hygiene reasons)</li>
                  <li>Clearance or final sale items</li>
                  <li>Gift cards and digital products</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How to Return an Item</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Contact Us</strong> - Email returns@toysworld.com or use our Contact page within 
                30 days of receiving your order
              </li>
              <li>
                <strong>Get Authorization</strong> - We'll provide you with a Return Authorization (RA) 
                number and instructions
              </li>
              <li>
                <strong>Pack Your Item</strong> - Securely pack the item in its original packaging with 
                all accessories and documentation
              </li>
              <li>
                <strong>Ship It Back</strong> - Use the prepaid return label we provide (for defective items) 
                or ship at your own cost
              </li>
              <li>
                <strong>Get Your Refund</strong> - Once we receive and inspect your return, we'll process 
                your refund within 5-7 business days
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Exchange Process</h2>
            <p className="mb-4">
              If you'd like to exchange an item for a different size, color, or product, please follow 
              the return process and place a new order for the item you want. This ensures faster processing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Refund Methods</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Refunds will be issued to the original payment method</li>
              <li>Processing time: 5-7 business days after we receive your return</li>
              <li>Additional 3-5 business days for your bank to process the refund</li>
              <li>Shipping costs are non-refundable unless the item was defective or we made an error</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Damaged or Defective Items</h2>
            <p className="mb-4">
              If you receive a damaged or defective item, please contact us immediately with photos of 
              the damage. We'll arrange for a replacement or full refund, including return shipping costs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Return Shipping Costs</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Defective/Damaged Items:</strong> We provide a prepaid return label</li>
              <li><strong>Changed Mind:</strong> Customer is responsible for return shipping</li>
              <li><strong>Wrong Item Sent:</strong> We provide a prepaid return label</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Questions?</h2>
            <p className="mb-4">
              If you have any questions about returns or exchanges, please don't hesitate to contact us at 
              returns@toysworld.com or through our Contact page. Our customer service team is here to help!
            </p>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default Returns;
