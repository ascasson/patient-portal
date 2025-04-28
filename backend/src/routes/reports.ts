import { FastifyPluginAsync } from 'fastify';
import { Type, Static } from '@sinclair/typebox';
import { ReportSchema } from '../schemas/reports';
import { getReports } from '../models/reports';

const QuerySchema = Type.Object({
  patientName: Type.Optional(Type.String()),
});
type Query = Static<typeof QuerySchema>;

const reportsRoute: FastifyPluginAsync = async (fastify) => {
  fastify.get(
    '/reports',
    {
      schema: {
        querystring: QuerySchema,
        response: {
          200: Type.Array(ReportSchema),
        },
      },
    },
    async (request, reply) => {
      const { patientName } = request.query as Query;
      fastify.log.info({ filter: patientName ?? null }, 'Fetching reports');
      const list = await getReports(fastify.prisma, patientName);
      return list;
    }
  );
};

export default reportsRoute;