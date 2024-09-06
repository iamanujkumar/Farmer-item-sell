import { useState } from "react";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "You can place an order by browsing through our crop listings, adding items to your cart, and proceeding to checkout. Payments can be made online through our secure gateway.",
  },
  {
    question: "What payment methods are available?",
    answer:
      "We accept credit/debit cards, UPI, and net banking for payments. All transactions are secured and encrypted.",
  },
  {
    question: "How long will delivery take?",
    answer:
      "Delivery usually takes 3-5 business days, depending on your location and the crop you have ordered.",
  },
  {
    question: "Can I return or exchange crops?",
    answer:
      "Yes, we have a return policy in place. You can return or exchange crops within 7 days of delivery if they are damaged or do not meet quality standards.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-green-500 rounded-lg overflow-hidden"
          >
            <button
              className="w-full px-4 py-2 text-left text-lg font-medium bg-green-100 hover:bg-green-200 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            <div
              className={`transition-all duration-300 ${
                activeIndex === index ? "max-h-40 py-4 px-4" : "max-h-0"
              } overflow-hidden text-gray-600`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}