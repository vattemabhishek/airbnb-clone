'use client'

import { Listing, Reservation } from '@prisma/client'
import { SafeReservations, SafeUser } from '../types'
import Container from '../components/Container'
import Heading from '../components/Heading'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import ListingCard from '../components/listing/ListingCard'

interface TripsClientProps {
  currentUser: SafeUser | null
  reservations: SafeReservations[]
}
const TripsClient = ({ currentUser, reservations }: TripsClientProps) => {
  const router = useRouter()
  const [deletingId, setDeletingId] = useState<string>('')
  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id)

      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success('Reservation cancelled')
          router.refresh()
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error)
        })
        .finally(() => {
          setDeletingId('')
        })
    },
    [router]
  )

  return (
    <Container>
      <Heading
        title='Trips'
        subtitle='Where youve been and where youre going'
      />
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
        {reservations.map((reservation) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel='Cancel Reservation'
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  )
}

export default TripsClient
