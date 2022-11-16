import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

import transactionRouter from './routes/transaction.router.js';

const app = express();
const port = process.env.PORT;
const dbUrl = process.env.DB_URL;

app.use(cors());
app.use(express.json());

app.use("/api/v1/transactions", transactionRouter);

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log(`Server running on port: ${port}`)))
  .catch((err) => console.error(err.message));
