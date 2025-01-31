import getCurrentUser from '@/app/actions/getCurrentUser'
import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/app/libs/prismadb'

interface IParams {
  reservationId?: string
}
export async function DELETE(
  req: NextRequest,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser()
  if (!currentUser) {
    return NextResponse.error()
  }

  const { reservationId } = params
  if (!reservationId || typeof reservationId !== 'string') {
    throw new Error('Invalid Id')
  }

  const reservation = await prisma.reservation.deleteMany({
    where: {
      id: reservationId,
      OR: [
        {
          userId: currentUser.id,
        },
        {
          listing: { userId: currentUser.id },
        },
      ],
    },
  })

  return NextResponse.json(reservation)
}
