import mongoose from "mongoose";
import "dotenv/config";

const mongo_url = process.env.MONGO_URL;

const db = async () => {
  try {
    await mongoose.connect(mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Cannot connect to the database:", error);
    process.exit(1); // Exit process with failure
  }
};

export default db;
