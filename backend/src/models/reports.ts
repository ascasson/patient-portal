import { PrismaClient } from '@prisma/client';
import type { Report } from '../schemas/reports';

export async function getReports(
    prisma: PrismaClient,
    patientName?: string
): Promise<Report[]> {
    const where = patientName ? { patientName: { contains: patientName } } : undefined;

    const rows = await prisma.report.findMany({
        where,
        orderBy: { date: 'desc' },
    });

    return rows.map(r => ({
        id: r.id,
        patientName: r.patientName,
        date: r.date.toISOString(),
        summary: r.summary,
    }));
}