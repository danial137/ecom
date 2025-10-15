import mongoose from "mongoose";

let isConnedcted = false;

export const connectOrderDB = async () => {
  if (isConnedcted) return;
  if (!process.env.MONGO_URL) {
    throw new Error("mongo_url is not work");
    }
    
    
  try {
    await mongoose.connect(process.env.MONGO_URL);
    isConnedcted = true;
    console.log("conned to mongoo db")
  } catch (error) {
    console.log(error);
    throw error;
  }
};
