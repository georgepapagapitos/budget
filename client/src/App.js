import { useEffect, useState } from 'react';
import { getTransactions, postTransaction } from './apiCalls';
import './styles.scss';
import { Button, Label, Select, Table, TextField } from "./components";
import { categories } from './helpers/categories';

export const App = () => {
  const initialTransactionState = { name: '', type: '', category: '', amount: '', };

  const [transactionInputValue, setTransactionInputValue] = useState(initialTransactionState);
  const [transactionArray, setTransactionArray] = useState([]);

  useEffect(() => {
    getTransactions(setTransactionArray);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    postTransaction(transactionArray, transactionInputValue, setTransactionArray);
    setTransactionInputValue(initialTransactionState);
  };

  const handleChange = (name, value) => {
    setTransactionInputValue({ ...transactionInputValue, [name]: value });
  };

  return (
    <div className='app'>
      <h1>Budget</h1>
      <div className='form-wrapper'>
        <h2>Add transaction</h2>
        <form className='form' onSubmit={handleSubmit}>
          <Label id='transaction-name-input' label='Name' />
          <span className='helper-text'>Enter a name for the transaction</span>
          <TextField
            name='name'
            id='transaction-name-input'
            onChange={({ target }) => handleChange(target.name, target.value)}
            value={transactionInputValue.name}
          />
          <Label id='transaction-amount-input' label='Amount' />
          <span className='helper-text'>Enter a transaction amount (USD)</span>
          <TextField
            name='amount'
            id='transaction-amount-input'
            onChange={({ target }) => handleChange(target.name, target.value)}
            type='number'
            value={transactionInputValue.amount}
          />
          <fieldset>
            <label className='form-label'>Pick a type</label>
            <label htmlFor='income'>Income</label>
            <input
              checked={transactionInputValue.type === 'income'}
              className='input radio'
              id='income'
              name='type'
              onChange={({ target }) => handleChange(target.name, target.value)}
              type='radio'
              value='income'
            />
            <label htmlFor='expense'>Expense</label>
            <input
              checked={transactionInputValue.type === 'expense'}
              className='input radio'
              id='expense'
              name='type'
              onChange={({ target }) => handleChange(target.name, target.value)}
              type='radio'
              value='expense'
            />
          </fieldset>
          <label htmlFor='transaction-category-select' className='form-label'>Category:</label>
          <span className='helper-text'>Only available for expenses</span>
          <Select
            disabled={transactionInputValue.type !== 'expense'}
            id='transaction-category-select'
            onChange={({ target }) => handleChange(target.name, target.value)}
            value={transactionInputValue.category}
          >
            <option value='' disabled>Select a category</option>
            {categories.map((category, i) => (
              <option
                key={category + i}
                value={category.value}
              >
                {category.displayName}
              </option>
            ))}
          </Select>
          <div className='button-group'>
            <Button
              variant='cancel'
              onClick={() => setTransactionInputValue(initialTransactionState)}
            >Cancel
            </Button>
            <Button
              variant='submit'
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
      {transactionArray.length > 0 &&
        <div className='table-wrapper'>
          <h2>Income</h2>
          <Table transactionArray={transactionArray} transactionType='income' setTransactionArray={setTransactionArray} />
          <h2>Expenses</h2>
          <Table transactionArray={transactionArray} transactionType='expense' setTransactionArray={setTransactionArray} />
        </div>}
    </div>
  );
};
