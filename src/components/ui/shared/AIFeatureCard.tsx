import React from 'react'
import Image from 'next/image'

interface AIFeatureCardProps {
  iconSrc: string
  title: string
  description: string
}

const AIFeatureCard: React.FC<AIFeatureCardProps> = ({ iconSrc, title, description }) => {
  return (
    <div className="flex items-start gap-3 p-4 md:p-5">
      <Image 
        src={iconSrc}
        width={48}
        height={48}
        alt="Feature Icon"
        className="flex-shrink-0"
      />

      <div className='flex-1'>
        <p className="text-lg md:text-xl font-semibold mb-2">{title}</p>
        <p className="text-sm md:text-base text-[#475467]">{description}</p>
      </div>
    </div>
  )
}

export default AIFeatureCard
