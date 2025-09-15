import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does ProHealth offer?",
      answer:
        "ProHealth provides a wide range of healthcare services including general medicine, pediatrics, gynecology, cardiology, and neurology.",
    },
    {
      question: "How do I schedule an appointment with ProHealth?",
      answer:
        "You can schedule an appointment by calling our helpline, using our online booking system, or visiting one of our clinics directly.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Yes, we accept most major insurance providers. Please check with our front desk or website for the complete list of accepted insurances.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-[#307CB4] text-lg font-semibold">WHAT PEOPLE</h2>
        <h3 className="text-6xl font-bold text-[#264660]">Usually Asked</h3>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-2xl border ${
              openIndex === index ? "bg-[#d7f2ffff] border-blue-300" : "border-gray-200"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left"
            >
              <span className="text-lg font-medium text-gray-800">
                {faq.question}
              </span>
              {openIndex === index ? (
                <IoIosArrowDown className="text-[#307CB4]" size={22} />
              ) : (
                <IoIosArrowUp className="text-[#307CB4]" size={22} />
              )}
            </button>

            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
