import { Prisma } from "@prisma/client";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from '../lib/prisma'
import { FastifyInstance } from "fastify";
import { generateSlug } from "../utils/generate-slug";
import { BadResquest } from "./_errors/bad-requests";

export async function createEvent(app: FastifyInstance){

app.withTypeProvider<ZodTypeProvider>().post(
  "/events",
  {
    schema: {
      summary: 'Create an Event',
      tags: ['events'],
      body: z.object({
        title: z.string({ invalid_type_error: 'O titulo precisa ser um texto'}).min(4),
        details: z.string().nullable(),
        maximumAttendees: z.number().int().positive().nullable(),
      }),
      response: {
        201: z.object({
          eventId: z.string().uuid(),
        }),
      },
    },
  },
  async (request, reply) => {
    const { title, details, maximumAttendees } = request.body;

    const slug = generateSlug(title);

    const eventWithSameSlug = await prisma.event.findUnique({
      where: {
        slug,
      },
    });

    if (eventWithSameSlug !== null) {
      throw new BadResquest("Another event with same title already exists.");
    }

    const event = await prisma.event.create({
      data: {
        title,
        details,
        maximumAttendees,
        slug,
      },
    });
    //return { eventId: event.id };
    return reply.status(201).send({ eventId: event.id });
  }
);
}