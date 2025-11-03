import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface BreadcrumbItem {
  label?: string
  href: string
  icon?: React.ReactNode
  iconSrc?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2 text-gray-400">/</span>}
            {index === items.length - 1 ? (
              <span className="flex items-center gap-2 font-medium text-gray-600">
                {item.iconSrc ? (
                  <Image src={item.iconSrc} alt="" width={16} height={16} className="h-4 w-4" />
                ) : (
                  item.icon && item.icon
                )}
                {item.label && item.label}
              </span>
            ) : (
              <Link
                href={item.href as any}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline"
              >
                {item.iconSrc ? (
                  <Image src={item.iconSrc} alt="" width={16} height={16} className="h-4 w-4" />
                ) : (
                  item.icon && item.icon
                )}
                {item.label && item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
