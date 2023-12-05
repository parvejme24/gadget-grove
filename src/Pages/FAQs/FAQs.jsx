import React, { useState } from "react";

const FAQs = () => {
  const faqsData = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Visa, MasterCard, American Express, and PayPal for all your purchases.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is processed and shipped, you will receive a confirmation email with a tracking number. You can use this number to track the delivery status of your order.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We have a 30-day return policy. If you are not completely satisfied with your purchase, you can return it within 30 days for a full refund. Please refer to our return policy for more details.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping. Shipping costs and delivery times may vary based on your location. Please check our international shipping information for details.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "Our customer support team is available 24/7. You can reach us via email at support@gadgetgrove.com or by phone at +1-123-456-7890.",
    },
    {
      question: "What is your warranty policy?",
      answer:
        "We offer a one-year warranty on all our products. This warranty covers manufacturing defects and malfunctions. For more information, please see our warranty policy.",
    },
    {
      question: "Can I change my order after it is placed?",
      answer:
        "You can make changes to your order before it is processed for shipping. Please contact our customer support team for assistance with order changes.",
    },
    {
      question: "Are there any discounts for bulk orders?",
      answer:
        "Yes, we offer discounts for bulk or wholesale orders. Please get in touch with our sales team to discuss your specific requirements and to receive a custom quote.",
    },
    {
      question: "What is the shipping cost?",
      answer:
        "Shipping costs may vary based on the size and weight of your order and your location. You can view the estimated shipping cost during the checkout process before finalizing your purchase.",
    },
    {
      question: "Do you have a physical store location?",
      answer:
        "At this time, we are an online-only retailer and do not have physical store locations. You can shop our full range of products on our website.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center py-8 mb-8 text-blue-600">
        Frequently Asked Questions
      </h1>
      <div className="accordion">
        {faqsData.map((faq, index) => (
          <div key={index} className="accordion-item mb-6">
            <input
              type="checkbox"
              id={`faq-${index}`}
              className="accordion-item-trigger hidden"
              checked={activeIndex === index}
            />
            <label
              htmlFor={`faq-${index}`}
              className="accordion-item-title dark:text-white text-xl bg-blue-200 dark:bg-blue-800 px-4 py-2 rounded-t-lg cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <span className="float-right">
                {activeIndex === index ? "-" : "+"}
              </span>
            </label>
            <div className="accordion-item-content px-4 py-2 dark:text-white bg-blue-100 dark:bg-blue-950 rounded-b-lg border-l border-r border-b border-gray-200">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
