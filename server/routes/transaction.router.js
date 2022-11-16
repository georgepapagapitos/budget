import express from 'express';
import { getTransactions, getTransaction, postTransaction, deleteTransaction } from '../controllers/transaction.controller.js';

const router = express.Router();

router.get("/", getTransactions);
router.get("/:id", getTransaction);
router.post("/", postTransaction);
router.delete("/:id", deleteTransaction);

export default router;
