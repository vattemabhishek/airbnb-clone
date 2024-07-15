'use client'
import useCountries from '@/app/hooks/useCountries'
import { SafeUser } from '@/app/types'
import React from 'react'
import { IconType } from 'react-icons'
import Avatar from '../Avatar'
import ListingCategory from './ListingCategory'
import dynamic from 'next/dynamic'

interface ListingInfoProps {
  user: SafeUser
  category:
    | {
        icon: IconType
        label: string
        description: string
      }
    | undefined
  description: string
  roomCount: number
  bathroomCount: number
  guestCount: number
  locationValue: string
}

const ListingInfo = ({
  user,
  category,
  description,
  roomCount,
  bathroomCount,
  guestCount,
  locationValue,
}: ListingInfoProps) => {
  const { getByValue } = useCountries()

  const Map = dynamic(() => import('../Map'), { ssr: false })
  const coordinates = getByValue(locationValue)?.latlng
  return (
    <div className='col-span-4 flex flex-col gap-8'>
      <div className='flex flex-col gap-2'>
        <div className='text-xl semibold flex flex-row items-center gap-2'>
          <div>Hosted by {user?.name}</div>
          <Avatar userImage={user?.image} />
        </div>
        <div className='flex flex-row items-center gap-4 font-light text-neutral-500'>
          <div>
            {guestCount} {guestCount > 1 ? 'guests' : 'guest'}
          </div>
          <div>
            {roomCount} {roomCount > 1 ? 'rooms' : 'room'}
          </div>
          <div>
            {bathroomCount}
            {bathroomCount > 1 ? 'bathrooms' : 'bathroom'}
          </div>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
      <hr />
      <div className='text-lg font-light text-neutral-500'>{description}</div>
      <hr />
      <Map center={coordinates} />
    </div>
  )
}

export default ListingInfo
