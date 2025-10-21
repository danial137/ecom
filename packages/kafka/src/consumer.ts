import type { Kafka, Producer } from "kafkajs";

export const createProducer = (Kafka: Kafka) => {
    const producer:Producer=Kafka.producer
}