import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is The Futurist Academy?",
    answer: "The Futurist Academy is an advanced Web3 education platform that provides hands-on training, mentorship, and career support for students looking to break into the blockchain and Web3 industry."
  },
  {
    question: "What courses do you offer?",
    answer: "We currently focus on Web3 development, smart contracts, DeFi protocols, and blockchain security. We're expanding our curriculum to include cloud computing and other emerging technologies. New courses are added regularly based on industry demand."
  },
  {
    question: "Do I need prior experience to enroll?",
    answer: "No prior experience is required! Our programs are designed for beginners to advanced learners. We provide foundational courses and personalized learning paths to help you succeed regardless of your starting point."
  },
  {
    question: "What kind of career support do you provide?",
    answer: "We provide 1-on-1 mentorship, career guidance, job placement assistance, industry networking opportunities, and portfolio development support to help you land your dream job in Web3 and blockchain development."
  },
  {
    question: "Can I learn at my own pace?",
    answer: "Absolutely! Our flexible learning platform allows you to learn at your own pace with lifetime access to course materials, recorded sessions, and ongoing support from our community and instructors."
  }
];

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 px-6 text-center" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-sans font-bold text-white mb-6 leading-tight">
            Frequently Asked<br/>
            <span className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg font-sans font-normal" style={{ color: '#BBBBBB' }}>
            Have another question? Please contact our team!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl transition-all duration-300"
              style={{ backgroundColor: '#1A1A1A' }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-center hover:bg-opacity-80 transition-all duration-300 rounded-2xl"
              >
                <h3 className="text-xl font-sans font-bold text-white pr-4 flex-1 text-center">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {expandedIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-white" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-white" />
                  )}
                </div>
              </button>
              
              {expandedIndex === index && (
                <div className="px-8 pb-6 animate-in slide-in-from-top-2 duration-300 text-center">
                  <p className="text-base font-sans font-normal leading-relaxed" style={{ color: '#BBBBBB' }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}