import mongoose from "mongoose";

type ConnectionObject = {
  isConnected: number;
};
const connection: ConnectionObject = {} as ConnectionObject;

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(
      (process.env.MONGO_URL as string) || "",
      {}
    );
    connection.isConnected = db.connections[0].readyState;
    console.log("DB Connected");
  } catch (error) {
    console.log("DB connection failed", error);
    process.exit(1);
  }
}

export default dbConnect;
