import axios from 'axios';

export const getTransactions = async (setTransactionArray) => {
  try {
    const transactions = await axios.get('/api/v1/transactions');
    setTransactionArray(transactions.data);
  } catch (error) {
    console.error({ message: error.message });
  }
};

export const postTransaction = async (transactionArray, transactionToPost, setTransactionArray) => {
  try {
    const postedTransaction = await axios.post('/api/v1/transactions', transactionToPost);
    setTransactionArray([...transactionArray, postedTransaction.data]);
  } catch (error) {
    console.error({ message: error.message });
  }
};

export const deleteTransaction = async (idToDelete) => {
  try {
    await axios.delete(`/api/v1/transactions/${idToDelete}`);
  } catch (error) {
    console.error({ message: error.message });
  }
};
