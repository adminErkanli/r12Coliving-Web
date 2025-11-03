import React from 'react'

interface InfoItem {
  title: string
  description: string
}

interface InfoGridProps {
  items: InfoItem[]
}

const InfoGrid: React.FC<InfoGridProps> = ({ items }) => {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => (
        <div key={index}>
          <p className="text-lg md:text-xl">{item.title}</p>
          <p className='text-sm text-white/70 mt-3'>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default InfoGrid
