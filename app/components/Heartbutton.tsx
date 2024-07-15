'use client'
import React from 'react'
import { SafeUser } from '../types'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import useFavourite from '../hooks/useFavourite'

interface HeartbuttonProps {
  listingId: string
  currentUser?: SafeUser | null
}

const Heartbutton = ({ listingId, currentUser }: HeartbuttonProps) => {
  const { hasFav, toggleFav } = useFavourite({ listingId, currentUser })
  return (
    <div
      onClick={toggleFav}
      className='relative hover:opacity-80 transition cursor-pointer'
    >
      <AiOutlineHeart
        size={28}
        className='fill-white absolute -top-[2px] -right-[2px]'
      />
      <AiFillHeart
        size={24}
        className={hasFav ? 'fill-rose-500' : 'fill-neutral-500/70'}
      />
    </div>
  )
}

export default Heartbutton
