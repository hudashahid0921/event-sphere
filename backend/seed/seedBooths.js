import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Booth from '../models/Booth.js';
dotenv.config();

const run = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Booth.deleteMany({});
  const labels = [];
  for (let r of ['A','B','C']) {
    for (let i=1;i<=10;i++) labels.push(`${r}${String(i).padStart(2,'0')}`);
  }
  await Booth.insertMany(labels.map(l => ({ label: l })));
  console.log('Seeded booths');
  process.exit(0);
};

run();
