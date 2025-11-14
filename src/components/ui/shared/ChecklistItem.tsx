import React from 'react'
import Image from 'next/image'

interface ChecklistItemProps {
  text: string
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ text }) => {
  return (
    <div className="flex items-center gap-3">
      <Image 
        src="/icons/how-it-works/check.svg"
        width={28}
        height={28}
        alt="Checkmark"
        className="flex-shrink-0"
      />
      <p className="text-base md:text-lg lg:text-xl text-[#475467]">{text}</p>
    </div>
  )
}

export default ChecklistItem
