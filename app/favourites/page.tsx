'use client'
import React from 'react'
import getCurrentUser from '../actions/getCurrentUser'
import EmptyState from '../components/EmptyState'
import getFavouriteListings from '../actions/getFavourites'
import FavouritesClient from './FavouritesClient'

const page = async () => {
  const listings = await getFavouriteListings()
  const currentUser = await getCurrentUser()

  if (listings.length === 0) {
    return (
      <EmptyState
        title='No favourites found'
        subtitle='Looks like you have no favourite listings'
      />
    )
  }
  return <FavouritesClient listings={listings} currentUser={currentUser} />
}

export default page
