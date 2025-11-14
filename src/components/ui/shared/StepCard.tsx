import React from 'react'

interface StepCardProps {
  value: string
  title: string
  description: string
}

const StepCard: React.FC<StepCardProps> = ({ value, title, description }) => {
  return (
    <div className='space-y-2'>
      <p className="text-4xl md:text-5xl lg:text-6xl font-bold">{value}</p>
      <p className="text-lg md:text-xl font-medium">{title}</p>
      <p className='text-sm md:text-base text-white/80'>{description}</p>
    </div>
  )
}

export default StepCard
