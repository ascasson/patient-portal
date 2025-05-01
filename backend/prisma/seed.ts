import { PrismaClient } from '@prisma/client';
import demoData from './demo-data';

const prisma = new PrismaClient();

async function main() {
  // Optional: clear existing data
  await prisma.report.deleteMany();

  // Seed data
  await prisma.report.createMany({
    data: demoData,
  });

  console.log('Database has been seeded with CIED and HF data.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
