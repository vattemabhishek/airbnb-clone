import getCurrentUser from '../../actions/getCurrentUser'

import prisma from '../../libs/prismadb'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const currentUser = await getCurrentUser()
  if (!currentUser) {
    return NextResponse.error()
  }

  const body = await req.json()
  const {
    title,
    description,
    imageSrc,
    category,
    roomCount,
    bathroomCount,
    guestCount,
    location,
    price,
  } = body

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error()
    }
  })

  const listing = await prisma.listing.create({
    data: {
      title,
      description,
      imageSrc,
      category,
      roomCount,
      bathroomCount,
      guestCount,
      locationValue: location.value,
      price: parseInt(price, 10),
      userId: currentUser.id,
    },
  })

  return NextResponse.json(listing)
}
