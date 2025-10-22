import { consumer } from "./kafka";
import { createOrder } from "./order";

export const runKafkaSubscriptions = async () => {
    consumer.subscribe([
        {
            topicName: "payment.succesfull",
            topicHandler: async (message) => {
                console.log("Received message: payment.succesfull", message);

                const order = message.value;
                await createOrder(order)
            }
        }]);
};
