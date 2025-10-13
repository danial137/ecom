import { FastifyInstance } from "fastify";
import { shouldBeUser } from "../middleware/authMiddleware";

export const orderRoute = async (fastify: FastifyInstance) => {
    fastify.get("/user-order",{preHandler:shouldBeUser}, async (request, reply) => {
    

        
    })
}