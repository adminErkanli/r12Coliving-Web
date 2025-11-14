import React from 'react'
import Image from 'next/image'
import ChecklistItem from './ChecklistItem'

interface FeatureSectionProps {
  iconSrc: string
  title: string
  subtitle: string
  checklist: string[]
  imageSrc: string
  imageAlt: string
  reverse?: boolean
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  iconSrc,
  title,
  subtitle,
  checklist,
  imageSrc,
  imageAlt,
  reverse = false
}) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      {reverse && (
        <div className="order-2 lg:order-1">
          <Image 
            src={imageSrc}
            width={600}
            height={560}
            alt={imageAlt}
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}
      
      <div className={`flex flex-col gap-4 md:gap-5 justify-center ${reverse ? 'order-1 lg:order-2' : 'order-1'}`}>
        <Image 
          src={iconSrc}
          width={48}
          height={48}
          alt="Feature Icon"
        />

        <p className='text-xl md:text-2xl font-semibold'>{title}</p>
        <p className="text-lg md:text-xl text-[#625B71]">{subtitle}</p>

        <div className="flex flex-col gap-2 mt-2">
          {checklist.map((item, index) => (
            <ChecklistItem key={index} text={item} />
          ))}
        </div>
      </div>

      {!reverse && (
        <div className="order-2">
          <Image 
            src={imageSrc}
            width={600}
            height={560}
            alt={imageAlt}
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}
    </div>
  )
}

export default FeatureSection
