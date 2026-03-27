import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import bcrypt from 'bcryptjs'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🌱 Seeding database...')

  // Admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  await prisma.user.upsert({
    where: { email: 'admin@pos.com' },
    update: {},
    create: {
      name: 'Admin',
      email: 'admin@pos.com',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  // Categories
  await prisma.category.createMany({
    skipDuplicates: true,
    data: [
      { name: 'Grocery' },
      { name: 'Baby Food' },
      { name: 'Skin Care' },
      { name: 'Ladies Bag' },
      { name: 'School Bag' },
    ],
  })

  // Suppliers
  await prisma.supplier.createMany({
    skipDuplicates: true,
    data: [
      {
        name: 'ABC Traders',
        phone: '01711000001',
        address: 'Dhaka, Bangladesh',
      },
      {
        name: 'XYZ Wholesale',
        phone: '01711000002',
        address: 'Chittagong, Bangladesh',
      },
    ],
  })

  console.log('✅ Seeding completed!')
  console.log('📧 Email: admin@pos.com')
  console.log('🔑 Password: admin123')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())