// imports
import mongoose from "mongoose";

// Fetches the MongoDB URI from the environment variables.
const MONGODB_URI = process.env.MONGODB_URI;

//  Connects to the MongoDB database using the provided URI.
// A cached connection and promise are used to prevent unnecessary reconnections.
let cached = (global as any).mongoose || { conn: null, promise: null };

// Asynchronous function to establish a connection to the MongoDB database.
export const connectToDatabase = async () => {
  // If a connection is already established, return the existing connection.
  if (cached.conn) return cached.conn;

  // Throws an error if the MongoDB URI is not provided.
  if (!MONGODB_URI) throw new Error("Missing URI connection");

  // Establishes a new connection if none exists, using the provided URI and additional options.
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "Eventifyr",
      bufferCommands: false,
    });

  // Waits for the connection promise to resolve and assigns it to the cached connection.
  cached.conn = await cached.promise;

  // Returns the established MongoDB connection.
  return cached.conn;
};
