import axios from 'axios';

export const getTransactions = async () => {
  try {
    const transactions = await axios.get('/api/v1/transactions');
    return transactions.data;
  } catch (error) {
    if (error instanceof Error) console.error({ message: error.message });
  }
};

export const postTransaction = async (transactionToPost: {
  name: string,
  type: string,
  category: string,
  amount: number,
}) => {
  try {
    const postedTransaction = await axios.post('/api/v1/transactions', transactionToPost);
    return postedTransaction.data;
  } catch (error) {
    if (error instanceof Error) console.error({ message: error.message });
  }
};

export const deleteTransaction = async (idToDelete: string) => {
  try {
    await axios.delete(`/api/v1/transactions/${idToDelete}`);
  } catch (error) {
    if (error instanceof Error) console.error({ message: error.message });
  }
};
