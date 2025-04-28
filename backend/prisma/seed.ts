import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Optional: clear existing data
  await prisma.report.deleteMany();

  // Seed data
  await prisma.report.createMany({
    data: [
      {
        id: '1',
        patientName: 'John Doe',
        date: new Date('2025-04-24T09:30:00.000Z'),
        summary: 'CIED interrogation: battery at 80%, lead thresholds stable.',
      },
      {
        id: '2',
        patientName: 'Jane Smith',
        date: new Date('2025-04-23T15:45:30.123Z'),
        summary: 'HF clinic follow-up: reported 2 kg weight gain over 1 week; diuretic dose adjusted.',
      },
      {
        id: '3',
        patientName: 'Carlos Ruiz',
        date: new Date('2025-04-22T11:15:00.000Z'),
        summary: 'Pacemaker lead impedance check: all values within normal range.',
      },
      {
        id: '4',
        patientName: 'Emily Zhang',
        date: new Date('2025-04-21T14:00:00.000Z'),
        summary: 'CRT device optimization: AV delay reprogrammed to improve synchrony.',
      },
      {
        id: '5',
        patientName: 'Fatima Khan',
        date: new Date('2025-04-20T08:30:00.000Z'),
        summary: 'ICD shock log review: no inappropriate therapies delivered.',
      },
      {
        id: '6',
        patientName: 'Michael Johnson',
        date: new Date('2025-04-19T10:45:00.000Z'),
        summary: 'CRT-D telemetry: detected episodes of non-sustained ventricular tachycardia.',
      },
      {
        id: '7',
        patientName: 'Sarah Lee',
        date: new Date('2025-04-18T13:20:00.000Z'),
        summary: 'Home monitoring: atrial arrhythmia detected; HF symptoms stable.',
      },
      {
        id: '8',
        patientName: 'David Kim',
        date: new Date('2025-04-17T09:00:00.000Z'),
        summary: 'HF remote monitoring: increased thoracic impedance; diuretic compliance reinforced.',
      },
      {
        id: '9',
        patientName: 'Laura Perez',
        date: new Date('2025-04-16T16:15:00.000Z'),
        summary: 'CIED follow-up: generator replacement recommended based on battery status.',
      },
      {
        id: '10',
        patientName: "James O'Connor",
        date: new Date('2025-04-15T11:30:00.000Z'),
        summary: 'HF management: observed orthopnea and nocturnal dyspnea; medication titrated.',
      },
      {
        id: '11',
        patientName: 'Olivia Martin',
        date: new Date('2025-04-14T10:00:00.000Z'),
        summary: 'Device diagnostics: lead noise artifact noted; scheduled for in-clinic evaluation.',
      },
      {
        id: '12',
        patientName: 'Ethan Thompson',
        date: new Date('2025-04-13T12:45:00.000Z'),
        summary: 'HF check: elevated BNP levels; ACE inhibitor dose increased.',
      },
      {
        id: '13',
        patientName: 'Sophia Williams',
        date: new Date('2025-04-12T15:30:00.000Z'),
        summary: 'CIED remote: detected atrial arrhythmia events; HF functional class remains NYHA II.',
      }
    ],
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
