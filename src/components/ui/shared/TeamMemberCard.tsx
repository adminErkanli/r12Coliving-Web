import React from 'react'
import Image from 'next/image'

interface TeamMemberCardProps {
  imageSrc: string
  name: string
  role: string
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ imageSrc, name, role }) => {
  return (
    <div className='space-y-1'>
      <Image
        src={imageSrc}
        alt={name}
        width={296}
        height={296}
        className="rounded-2xl mb-2 w-full h-auto"
      />

      <p className="text-lg md:text-xl font-semibold">
        {name}
      </p>

      <p className="text-xs text-[#625B71]">
        {role}
      </p>
    </div>
  )
}

export default TeamMemberCard
