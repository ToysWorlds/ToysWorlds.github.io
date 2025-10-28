import { MainLayout } from "@/components/layout/MainLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "Simply browse our products, add items to your cart, and proceed to checkout. You can checkout as a guest or create an account for faster future purchases."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and various local payment methods. All transactions are secure and encrypted."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping (1-2 days) and Next Day Delivery options are also available. Orders are typically processed within 1-2 business days."
    },
    {
      question: "Do you offer free shipping?",
      answer: "Yes! We offer free standard shipping on all orders over $80. Orders under $80 have a flat shipping rate of $8.99."
    },
    {
      question: "Can I track my order?",
      answer: "Yes, once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and viewing your order history."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on most items. Products must be unused and in original packaging with all tags attached. See our Returns & Exchanges page for full details."
    },
    {
      question: "How do pre-orders work?",
      answer: "Pre-order items can be purchased before they're released. You'll be charged when you place your order, and the item will ship once it becomes available. Estimated release dates are shown on product pages."
    },
    {
      question: "Are all products brand new and authentic?",
      answer: "Yes, all our products are brand new, authentic items purchased directly from authorized distributors and manufacturers."
    },
    {
      question: "Do you have a store I can visit?",
      answer: "Yes! Visit our Stores page to find locations near you. You can also shop online 24/7 with the same great selection."
    },
    {
      question: "How can I contact customer service?",
      answer: "You can reach us through our Contact page, email us at support@toysworld.com, or call our customer service hotline during business hours. We typically respond within 24 hours."
    },
    {
      question: "Do you offer gift wrapping?",
      answer: "Yes, gift wrapping is available for a small fee at checkout. We also include a gift message option."
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "Orders can be cancelled or modified within 2 hours of placement. After that, orders are typically already being processed. Contact us immediately if you need to make changes."
    },
    {
      question: "What if an item is out of stock?",
      answer: "You can sign up for email notifications on product pages to be alerted when items come back in stock. We regularly restock popular items."
    },
    {
      question: "Do you offer bulk or wholesale pricing?",
      answer: "For bulk orders or wholesale inquiries, please contact our business team at wholesale@toysworld.com."
    },
    {
      question: "Are toys age-appropriate and safety tested?",
      answer: "Yes, all our toys meet international safety standards and include age recommendations. Please always supervise children during play and follow manufacturer guidelines."
    }
  ];

  return (
    <MainLayout>
      <div className="container-custom py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about orders, shipping, returns, and more
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center bg-muted p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            Can't find the answer you're looking for? Our customer service team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </div>
      </div>
    </MainLayout>
  );
};

export default FAQ;
