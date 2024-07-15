'use client'

import Container from '../components/Container'
import Heading from '../components/Heading'
import ListingCard from '../components/listing/ListingCard'
import { SafeListings, SafeUser } from '../types'

interface FavouritesClientProps {
  listings: SafeListings[]
  currentUser?: SafeUser | null
}
const FavouritesClient = ({ listings, currentUser }: FavouritesClientProps) => {
  return (
    <Container>
      <Heading title='Favourites' subtitle='List of places you liked!' />
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
        {listings.map((listing) => (
          <ListingCard
            currentUser={currentUser}
            data={listing}
            key={listing.id}
          />
        ))}
      </div>
    </Container>
  )
}

export default FavouritesClient
