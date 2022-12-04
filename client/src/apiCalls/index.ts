import axios from 'axios';

export const getTransactions = async (setTransactionArray: React.Dispatch<React.SetStateAction<any>>) => {
  try {
    const transactions = await axios.get('/api/v1/transactions');
    setTransactionArray(transactions.data);
  } catch (error) {
    if (error instanceof Error) console.error({ message: error.message });
  }
};

export const postTransaction = async (transactionArray: [], transactionToPost: any, setTransactionArray: React.Dispatch<React.SetStateAction<any>>) => {
  try {
    const postedTransaction = await axios.post('/api/v1/transactions', transactionToPost);
    setTransactionArray([...transactionArray, postedTransaction.data]);
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
