import getCurrentUser from '../../../actions/getCurrentUser'
import prisma from '../../../libs/prismadb'
import { NextRequest, NextResponse } from 'next/server'

interface IParams {
  listingId?: string
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return NextResponse.error()
  }

  const { listingId } = params

  if (!listingId || typeof listingId !== 'string') {
    throw new Error('Invalid Id')
  }

  const listing = await prisma.listing.deleteMany({
    where: {
      id: listingId,
      userId: currentUser.id,
    },
  })
  return NextResponse.json(listing)
}
