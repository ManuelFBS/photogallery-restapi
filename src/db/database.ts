import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const url = `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`;

export async function startConnection() {
  await mongoose.connect(url);
  console.log('Database is connected...!');
}
