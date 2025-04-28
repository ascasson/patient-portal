import { Type, Static } from '@sinclair/typebox';

export const ReportSchema = Type.Object({
  id: Type.String(),
  patientName: Type.String(),
  date: Type.String({ format: 'date-time' }),
  summary: Type.String(),
});

export type Report = Static<typeof ReportSchema>;
