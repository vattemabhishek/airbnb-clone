import React from 'react'
import getCurrentUser from '../actions/getCurrentUser'
import EmptyState from '../components/EmptyState'
import getReservations from '../actions/getReservations'
import TripsClient from './PropertiesClient'
import getListings from '../actions/getListings'
import PropertiesClient from './PropertiesClient'

const page = async () => {
  const currentUser = await getCurrentUser()
  if (!currentUser) {
    return <EmptyState title='Unauthorized' subtitle='please login' />
  }

  const listings = await getListings({
    userId: currentUser.id,
  })

  if (listings.length === 0) {
    return (
      <EmptyState
        title='No properties found'
        subtitle='Looks like you have no properties'
      />
    )
  }
  return <PropertiesClient listings={listings} currentUser={currentUser} />
}

export default page
