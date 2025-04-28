"use client";

import { useState } from "react";

// type SubList = {
//   id: string;
//   content: string;
// };

type Faq = {
  id: string;
  questions: string;
  answers: string;
};

export default function Faq({ questions }: { questions: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section id="faq" className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="max-w-7xl mx-auto px-[10px] py-[16px]">
        {/* <h2 className="font-[900] text-center text-lg md:text-xl lg:text-2xl">
          {title}
        </h2>
        <p className="mb-2 text-justify md:my-4">{description}</p> */}

        <div className="md:px-24 md:my-10">
          {questions.map((faq, index) => (
            <div key={index} className="text-white my-4 bg-[#252B73] ">
              <h3>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex justify-between items-center text-lg font-medium text-gray-900 p-[1rem] md:py-[1.5rem]"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-content-${index}`}
                >
                  <span className="text-white">{faq.questions}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`ml-2 transform transition-transform duration-300 text-white ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
              </h3>
              <div
                id={`faq-content-${index}`}
                role="region"
                className={`transition-[max-height] ease-in-out duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-full" : "max-h-0"
                }`}
                aria-hidden={openIndex !== index}
              >
                {faq.answers}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
