'use client'
import React from 'react'
import { IconType } from 'react-icons'

interface ButtonProps {
  label: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  outline?: boolean
  small?: boolean
  icon?: IconType
}

const Button = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative disabled:opcaity-70 disabled:cursor-not-allowed rounded-lg hover:opcaity-80 transition w-full 
       ${
         outline
           ? 'bg-white border-black text-black'
           : 'bg-rose-500 border-rose-500 text-white'
       }
       
       ${
         small
           ? 'py-1 text-sm font-light border-[1px]'
           : 'py-3 text-md font-semibold border-2'
       }
    
       
       `}
    >
      {Icon && <Icon size={24} className='absolute left-4 top-3' />}
      {label}
    </button>
  )
}

export default Button
