import { Transaction } from '../models/Transaction.js';

export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById({ _id: req.params.id });
    res.status(200).json(transaction);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};


export const postTransaction = async (req, res) => {
  const transaction = req.body;
  const newTransaction = new Transaction(transaction);

  try {
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    await Transaction.findByIdAndDelete({ _id: req.params.id });
    res.status(200);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
