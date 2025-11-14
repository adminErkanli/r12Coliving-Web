import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../accordion'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title: string
  categories: string[]
  faqs: FAQItem[]
}

const FAQSection: React.FC<FAQSectionProps> = ({ title, categories, faqs }) => {
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 md:gap-8 lg:gap-12">
        {/* Left Sidebar */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold leading-tight">
            {title}
          </h2>
          
          <div className="space-y-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className="block w-full text-left px-4 py-2 text-sm md:text-base text-[#6B7280] hover:text-[#111827] hover:bg-white rounded-md transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Right Content - FAQ Accordion */}
        <div className="space-y-2">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-[#E5E7EB] rounded-lg px-4 md:px-6"
              >
                <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-[#6B7280] pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default FAQSection
