import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How do I book a service?",
    answer:
      "Choose a service, select a professional, enter your booking details and confirm your booking.",
  },
  {
    question: "Are the professionals verified?",
    answer:
      "Yes, our goal is to provide verified and trusted professionals for every service.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes, you will be able to manage and cancel eligible bookings from your dashboard.",
  },
  {
    question: "How can I contact a service provider?",
    answer:
      "After a booking is confirmed, provider details can be made available through your booking information.",
  },
  {
    question: "Which services are available?",
    answer:
      "Services include electricians, plumbers, carpenters, cleaning, AC repair and other local services.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-500 mt-3">
            Find answers to common questions about our services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left font-semibold"
              >
                {faq.question}

                {openIndex === index ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;