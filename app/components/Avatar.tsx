'use client'
import Image from 'next/image'
import React from 'react'

interface AvatarProps {
  userImage?: string | null | undefined
}

const Avatar = ({ userImage }: AvatarProps) => {
  return (
    <div>
      <Image
        className='rounded-full '
        height={30}
        width={30}
        alt='avatar'
        src={userImage ? userImage : '/images/placeholder.png'}
      ></Image>
    </div>
  )
}

export default Avatar
