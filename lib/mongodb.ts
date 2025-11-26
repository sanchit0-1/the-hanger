import mongoose from "mongoose";

export default async function connectDB() {
  
  if (mongoose.connection.readyState >= 1) return;

  const uri = "mongodb://localhost:27017/";
  if (!uri) {
    console.error("❌ MONGO_URI is missing in .env");
    throw new Error("MONGO_URI not found in environment variables");
  }

  await mongoose.connect(uri, {
    dbName: "mydatabase",
  });

  console.log("✅ MongoDB Connected");

}
