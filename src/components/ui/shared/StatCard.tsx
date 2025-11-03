import React from 'react'

interface StatCardProps {
  value: string
  title: string
  description: string
}

const StatCard: React.FC<StatCardProps> = ({ value, title, description }) => {
  return (
    <div className="flex flex-col items-center gap-4 text-center px-4">
      <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4F46E5]">{value}</span>
      <span className="text-xl md:text-2xl font-medium">{title}</span>
      <span className="text-sm md:text-base text-[#625B71]">{description}</span>
    </div>
  )
}

export default StatCard
