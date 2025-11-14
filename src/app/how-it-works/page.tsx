import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import FeatureSection from '@/components/ui/shared/FeatureSection'
import StepCard from '@/components/ui/shared/StepCard'
import AIFeatureCard from '@/components/ui/shared/AIFeatureCard'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const page = () => {
  const features = [
    {
      iconSrc: "/icons/how-it-works/rocket.svg",
      title: "Choose Your Space",
      subtitle: "Find what feels like home.",
      checklist: [
        "Browse all verified homes and rooms.",
        "Filter by city, lifestyle, or vibe.",
        "Save your favorites to compare easily."
      ],
      imageSrc: "/how-it-works/placeholder.png",
      imageAlt: "Choose Your Space Illustration",
      reverse: false
    },
    {
      iconSrc: "/icons/how-it-works/rocket.svg",
      title: "Complete Your Booking",
      subtitle: "Fast, clear, and secure.",
      checklist: [
        "Select your stay duration (3–12 months).",
        "Review rental terms and house rules.",
        "Confirm your booking online in minutes."
      ],
      imageSrc: "/how-it-works/placeholder.png",
      imageAlt: "Complete Your Booking Illustration",
      reverse: true
    },
    {
      iconSrc: "/icons/how-it-works/heart.svg",
      title: "Move In & Feel at Home",
      subtitle: "Start living — stress-free.",
      checklist: [
        "Receive digital check-in details instantly.",
        "Meet your new community and settle in.",
        "Enjoy verified comfort from day one."
      ],
      imageSrc: "/how-it-works/placeholder.png",
      imageAlt: "Move In & Feel at Home Illustration",
      reverse: false
    }
  ]

  const aiFeatures = [
    {
      iconSrc: "/icons/how-it-works/user.svg",
      title: "Personalized for you",
      description: "Our system learns from your preferences — finding spaces that truly match how you live, not just where you live."
    },
    {
      iconSrc: "/icons/how-it-works/user.svg",
      title: "Save Time, Skip the Guesswork",
      description: "No endless scrolling. AI Match filters hundreds of listings in seconds to bring you the right fit first."
    },
    {
      iconSrc: "/icons/how-it-works/user.svg",
      title: "Better Roommates, Better Living",
      description: "It's not just about the place — it's about people. Get matched with communities and roommates who share your vibe."
    }
  ]

  const steps = [
    {
      value: "3 min",
      title: "Quick Search",
      description: "Find your space fast with filters that fit your lifestyle."
    },
    {
      value: "5 min",
      title: "Easy Booking",
      description: "Complete your booking online with secure payment."
    },
    {
      value: "24/7",
      title: "Support Ready",
      description: "Our team is always here to help you settle in."
    },
    {
      value: "100%",
      title: "Verified Homes",
      description: "Every space is checked and ready for you."
    }
  ]

  const faqCategories = [
    {
      category: "General Information",
      questions: [
        {
          question: "What is coliving?",
          answer: "Coliving is modern shared living — private rooms with shared spaces, designed to connect people with similar lifestyles and goals."
        },
        {
          question: "Who can join R12 Coliving?",
          answer: "R12 is perfect for students, young professionals, designers, developers, and digital nomads looking for community-driven living spaces."
        },
        {
          question: "How does the matching process work?",
          answer: "Our AI analyzes your lifestyle preferences, budget, and habits to match you with compatible homes and communities that fit your needs."
        },
        {
          question: "What's included in a coliving space?",
          answer: "All spaces include furnished private rooms, shared common areas, utilities, WiFi, and regular cleaning services. Some locations offer additional amenities."
        }
      ]
    },
    {
      category: "Accommodation and facilities",
      questions: [
        {
          question: "How can I become a host?",
          answer: "If you have a property suitable for coliving, you can apply to become a host through our website. We'll verify your space and guide you through the onboarding process."
        }
      ]
    },
    {
      category: "Guest and pet policies",
      questions: []
    },
    {
      category: "Rental and membership",
      questions: []
    },
    {
      category: "Invoices and additional services",
      questions: []
    },
    {
      category: "Foreigners and residence permits",
      questions: []
    },
    {
      category: "Rules and safety",
      questions: [
        {
          question: "Lorem ipsum dolor sit amet consectetur?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          question: "Arcu pharetra nulla duis erat id?",
          answer: "Arcu pharetra nulla duis erat id mauris tellus. Elementum dignissim facilisis viverra risus sed ut."
        }
      ]
    }
  ]

  return (
    <>
    <div className='p-4 md:p-6 lg:p-8 space-y-16 md:space-y-20'>
      {/* Hero Section */}
      <div className="min-h-[300px] md:min-h-[350px] lg:min-h-[400px] flex items-center justify-center flex-col gap-4 md:gap-5 px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
          Simple. Transparent. Human-centered.
        </h1>
        <p className='text-base md:text-lg lg:text-xl text-center max-w-2xl text-[#625B71]'>
          From finding your perfect home to settling in with your new community — here's how R12 makes coliving effortless.
        </p>
        <Button className='w-40 md:w-44 h-10 bg-[#4F46E5] text-white mt-4 md:mt-6'>
          Get Started
        </Button>
      </div>

      {/* Feature Sections */}
      {features.map((feature, index) => (
        <FeatureSection key={index} {...feature} />
      ))}

      {/* AI Match Section Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className='space-y-4 md:space-y-5 max-w-2xl'>
          <p className="text-xs md:text-sm text-[#4F46E5] uppercase tracking-wide">AI Match</p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Smart Living, Perfectly Matched.
          </p>
          <p className="text-base md:text-lg lg:text-xl text-[#625B71]">
            Our AI analyzes your lifestyle, budget, and habits to connect you with the most compatible homes and communities.
          </p>
        </div>

        <Button className='w-40 md:w-44 h-10 bg-[#4F46E5] text-white whitespace-nowrap'>
          Get Started
        </Button>
      </div>

      {/* AI Features Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
        <div className='flex flex-col gap-3 md:gap-4'>
          {aiFeatures.map((feature, index) => (
            <AIFeatureCard key={index} {...feature} />
          ))}
        </div>

        <Image 
          src="/how-it-works/placeholder.png"
          width={600}
          height={560}
          alt="AI Match Illustration"
          className="w-full h-auto rounded-lg order-first lg:order-last"
        />
      </div>
    </div>
    
    {/* Bottom CTA Section */}
    <div className="bg-[#4F46E5] text-white w-full p-6 md:p-12 lg:p-20 py-12 md:py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12 md:mb-16 lg:mb-20">
        <div className='space-y-4 md:space-y-5 max-w-2xl'>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Effortless Living, Every Step.
          </p>
          <p className="text-base md:text-lg lg:text-xl">
            From your first search to move-in day, every step with R12 is seamless — guided by smart tech, verified listings, and a home that fits you.
          </p>
        </div>

        <Button className='w-40 md:w-44 h-10 bg-white text-[#4F46E5] whitespace-nowrap'>
          Get Started
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
        <Image 
          src="/how-it-works/placeholder.png"
          width={600}
          height={560}
          alt="Effortless Living Illustration"
          className="w-full h-auto rounded-lg"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </div>

    {/* FAQ Section */}
    <div className="p-4 md:p-6 lg:p-8 py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 md:gap-8 lg:gap-12">
        {/* Categories Sidebar */}
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Quick answers before you join R12 Coliving.
          </h2>
          
          <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {faqCategories.map((cat, index) => (
              <button
                key={index}
                className="text-left text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap lg:whitespace-normal px-3 py-2 rounded-md hover:bg-gray-50 transition-colors"
              >
                {cat.category}
              </button>
            ))}
          </nav>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {faqCategories.map((category, catIndex) => (
            category.questions.length > 0 && (
              <div key={catIndex}>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${catIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left text-base md:text-lg hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm md:text-base text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default page
