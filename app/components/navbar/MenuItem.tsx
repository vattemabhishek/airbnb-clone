'use client'
import React from 'react'

interface MenutItemProps {
  onClick: () => void
  label: string
}

const MenuItem = ({ onClick, label }: MenutItemProps) => {
  return (
    <div
      className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
      onClick={onClick}
    >
      {label}
    </div>
  )
}

export default MenuItem
