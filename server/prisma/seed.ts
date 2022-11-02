import { PrismaClient } from '@prisma/client'

const prisma  = new PrismaClient()

async function main() {
  const user =  await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'jdoe@example.com',
      avatarUrl: 'https://github.com/renanvcb.png',
    }
  })

  const pool = await prisma.pool.create({
    data: {
      title: 'Example Pool',
      code: 'pool123',
      ownerId: user.id,

      participants: {
        create: {
          userId: user.id
        }
      }
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-03T12:00:00.974Z',
      firstTeamCoutryCode: 'DE',
      secondTeamCountryCode: 'BR',
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-04T12:00:00.974Z',
      firstTeamCoutryCode: 'BR',
      secondTeamCountryCode: 'AR',

      guesses: {
        create: {
          firsTeamPoints: 2,
          secondTeamPoints: 1,

          participant: {
            connect: {
              userId_poolId: {
                userId: user.id,
                poolId: pool.id
              }
            }
          }
        }
      }
    }
  })
}

main()