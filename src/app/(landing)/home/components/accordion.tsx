import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQAccordion() {
  const faqItems = [
    {
      value: "item-1",
      question: " How long does it take to get interview results?",
      answer:
        "Scoutin can conduct 100+ AI interviews within 15–20 minutes. Results are compiled and available on your dashboard just 5 minutes after completion, ready for review and filtering.",
    },
    {
      value: "item-2",
      question: " Can we change the interview questions? ",
      answer:
        "Absolutely! You can update or modify your interview questionnaire anytime, even mid campaign. Scoutin adjusts instantly to your hiring strategy.",
    },
    {
      value: "item-3",
      question: "Can we set specific job requirements?",
      answer:
        "Yes. You can define what matters most—communication, technical skills, or both. Requirements are fully customizable and can be changed at any point.",
    },
    {
      value: "item-4",
      question: " How does Scoutin choose candidates to interview?",
      answer:
        "Scoutin filters applicants using the criteria you set, then conducts structured AI interviews to ensure only the most relevant candidates move forward",
    },
    {
      value: "item-5",
      question: " Is Scoutin suitable for all industries? ",
      answer:
        "Yes, Scoutin is flexible. Whether you're hiring for tech, customer service, marketing, or any niche, our AI adapts to your domain and job-specific needs.",
    },
    {
      value: "item-6",
      question: "  Do candidates need any special setup?  ",
      answer:
        "No special tools are required. Candidates can complete interviews using any modern browser, with a working mic and camera. It’s hassle-free and mobile-friendly.",
    },
  ];

  return (
    <div
      data-aos="fade-up"
      className="w-full max-w-[1600px] m-auto p-4 sm:p-6 lg:p-25 "
    >
      <Accordion type="single" collapsible className="w-full max-w-4xl m-auto">
        <div className="flex justify-start font-bold text-3xl py-6">
          <h2>Frequently Asked Question</h2>
        </div>
        {faqItems.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            className="border-b"
          >
            <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-medium py-3 sm:py-4 hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 pb-4">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
