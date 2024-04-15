import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import {
  serializerCompiler,
  validatorCompiler, jsonSchemaTransform
} from "fastify-type-provider-zod";
import { checkIn } from "./routes/check-in";
import { createEvent } from "./routes/create-event";
import { getAttendeeBadge } from "./routes/get-attendee-badge";
import { getEvent } from "./routes/get-event";
import { getEventAttendees } from "./routes/get-event-attendees";
import { registerForEvent } from "./routes/register-for-event";
import { errorHandler } from "./error-handler";

const app = fastify();

app.register(fastifySwagger,{
  swagger:{
    consumes:['aplication/json'],
    produces: ['aplication/json'],
    info:{
      title: 'pass.in',
      description: 'Especificações da API  para o back-end da aplicação pass.in',
      version: "1.0.0"
    },
  },
  transform: jsonSchemaTransform
})

app.register(fastifySwaggerUi,{
  routePrefix: '/docs'
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);

app.setErrorHandler(errorHandler)

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running!");
});