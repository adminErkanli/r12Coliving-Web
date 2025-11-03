import React from 'react'
import Image from 'next/image'

interface ValueCardProps {
  iconSrc: string
  title: string
  description: string
}

const ValueCard: React.FC<ValueCardProps> = ({ iconSrc, title, description }) => {
  return (
    <div className="bg-[#E0E7FF] p-6 md:p-8 rounded-2xl space-y-12 md:space-y-20 flex flex-col justify-between min-h-[200px]">
      <Image 
        src={iconSrc}
        alt={`${title} Icon`}
        width={40}
        height={40}
      />

      <div className='space-y-3'>
        <p className="text-lg md:text-xl font-bold">{title}</p>
        <p className="text-sm text-[#625B71]">{description}</p>
      </div>
    </div>
  )
}

export default ValueCard
