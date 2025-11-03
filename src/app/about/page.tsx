import { Button } from '@/components/ui/button'
import Breadcrumbs from '@/components/ui/shared/Breadcrumbs'
import StatCard from '@/components/ui/shared/StatCard'
import ValueCard from '@/components/ui/shared/ValueCard'
import TeamMemberCard from '@/components/ui/shared/TeamMemberCard'
import InfoGrid from '@/components/ui/shared/InfoGrid'
import Image from 'next/image'
import React from 'react'

const page = () => {
  const stats = [
    {
      value: "250+",
      title: "Verified Listings",
      description: "Every space is verified and ready to move in — no surprises, no fees."
    },
    {
      value: "5",
      title: "Cities (Soon)",
      description: "Expanding from Istanbul to new cities across Turkey."
    },
    {
      value: "3,000+",
      title: "Members Matched",
      description: "People who found their ideal home and community through R12."
    },
    {
      value: "4.8/5",
      title: "Average Rating",
      description: "Trusted by residents who value comfort, design, and belonging."
    }
  ]

  const values = [
    {
      iconSrc: "/icons/trust.svg",
      title: "Trust & Safety",
      description: "Verified hosts, vetted members, and clear house rules. What you see is what you get."
    },
    {
      iconSrc: "/icons/house-heart.svg",
      title: "Community First",
      description: "Connect with like-minded people who share your values and lifestyle."
    },
    {
      iconSrc: "/icons/rocket.svg",
      title: "Growth & Freedom",
      description: "Flexible stays that adapt to your journey, wherever it takes you."
    }
  ]

  const missionItems = [
    {
      title: "Our Mission",
      description: "Making city living simple, human, and affordable for everyone."
    },
    {
      title: "What We Do",
      description: "We match people with verified coliving spaces that fit their lifestyle and values."
    },
    {
      title: "Our Promise",
      description: "Trust, clarity, and comfort in every stay — no hidden fees, no surprises."
    }
  ]

  const visionItems = [
    {
      title: "Our Vision",
      description: "To create a world where every home feels like your city — connected and inspiring."
    },
    {
      title: "How We Work",
      description: "Through smart matching, transparent pricing, and supportive communities."
    },
    {
      title: "The R12 Spirit",
      description: "Live better, together — because home is more than a place."
    }
  ]

  const teamMembers = Array.from({ length: 8 }).map((_, index) => ({
    imageSrc: "/team.png",
    name: "Olivia Rhye",
    role: "Co-Founder & CEO"
  }))

  return (
    <div className=''>
     <div className="p-4 md:p-6 lg:p-8">
         <Breadcrumbs
        items={[
          { iconSrc: '/icons/Home.svg', href: '/' },
          { label: 'About', href: '/about' },
        ]}
      />

      <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 mt-6 md:mt-8 lg:mt-10">
        <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
        We're building the easiest way to find a home that fits your lifestyle.
      </p>

      <p className="text-base md:text-lg lg:text-xl text-[#625B71]">R12 connects students, young professionals, designers, and developers with verified, move-in-ready coliving spaces — and the people who make them feel like home.</p>
    
      </div>

      <Image 
       src={"/placeholder.png"}
         alt="About R12 Coliving" 
            width={1200}
            height={600}
            className="mt-8 md:mt-12 lg:mt-16 rounded-lg w-full h-auto"
      />

      <div className="flex flex-col gap-5 my-8 md:my-10">
        <div className="space-y-4 md:space-y-5">
            <p className="text-2xl md:text-3xl lg:text-4xl">Built on trust. Growing with community.</p>
            <p className="text-base md:text-lg lg:text-xl text-[#625B71]">Numbers that reflect how far we've come — and where we're going next.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-4">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
     </div>

      <div className="my-8 md:my-10 bg-[#4F46E5] p-6 md:p-10 lg:p-16 py-12 md:py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 text-white">
        <div className="space-y-4 lg:col-span-1">
            <p className="text-sm md:text-base">About R12</p>
            <p className="text-2xl md:text-3xl lg:text-4xl">Live better, together.</p>
            <p className="text-base md:text-lg lg:text-xl">R12 connects people and places through transparent, community-driven coliving. Simple stays, shared experiences, real belonging.</p>
        </div>

        <InfoGrid items={missionItems} />
        <InfoGrid items={visionItems} />
      </div>

      <div className="p-4 md:p-6 lg:p-8 space-y-12 md:space-y-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className='space-y-4 md:space-y-6 max-w-3xl'>
                <p className='text-[#4F46E5] text-xs md:text-sm uppercase tracking-wide'>values</p>
                <p className="font-semibold text-2xl md:text-3xl lg:text-4xl">
                    More than a home - a way of living together.
                </p>

                <p className='text-[#625B71] text-base md:text-lg lg:text-2xl'>
                    Life feels lighter when you share it with people who inspire you. <br className="hidden md:block" />
                     Our communities bring connection, meaning, and freedom to everyday living.
                </p>
            </div>

            <Button className='bg-[#4F46E5] text-white px-8 md:px-12 py-2 whitespace-nowrap'>Get Started</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>

      <div className="p-4 md:p-6 lg:p-8">
        <div className="flex flex-col items-center my-8 md:my-10 gap-4 text-center">
            <p className='text-[#4F46E5] text-xs md:text-sm uppercase tracking-wide'>Team</p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                Team Behind R12
            </p>
            <p className="text-base md:text-lg lg:text-xl text-[#625B71] max-w-3xl">
                A small team with big ideas — combining design, technology, and community to reshape the way people live and connect.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>

      <div className="bg-[#E0E7FF] py-12 md:py-16 lg:py-24 px-6 md:px-8 lg:px-12 mt-12 md:mt-16 lg:mt-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 md:gap-8">
            <div className='space-y-4 md:space-y-6 w-full lg:w-2/3'>
                <p className='text-2xl md:text-3xl lg:text-4xl'>Ready to find your next home?</p>
                <p className="text-base md:text-lg lg:text-xl text-[#625B71]">Join a community that matches your rhythm. Whether you're a student, designer, or digital nomad — R12 helps you live better, together.</p>
            </div>

            <Button className='bg-[#4F46E5] text-white px-8 md:px-12 py-3 md:py-4 whitespace-nowrap'>
                Explore Communities
            </Button>
      </div>
    </div>
  )
}

export default page
