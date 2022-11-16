import React, { useEffect, useState } from 'react';
import { getTransactions, postTransaction } from '../../apiCalls';
import './main.scss';
import { Button, Label, Select, Table, TextField } from '../../components';
import { categories } from '../../constants/categories';

export const Main = () => {
  const initialTransactionState = { name: '', type: '', category: '', amount: 0, };

  const [transactionInputValue, setTransactionInputValue] = useState(initialTransactionState);
  const [transactionArray, setTransactionArray] = useState([]);

  useEffect(() => {
    getTransactions(setTransactionArray);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postTransaction(transactionArray as any, transactionInputValue, setTransactionArray);
    setTransactionInputValue(initialTransactionState);
  };

  const handleChange = (name: string, value: string) => {
    setTransactionInputValue({ ...transactionInputValue, [name]: value });
  };

  return (
    <div className='main'>
      <div className='form-wrapper'>
        <h2 className='form-title' id='add-transaction'>Add transaction</h2>
        <form className='form' onSubmit={handleSubmit}>
          <Label id='transaction-name-input' label='Name' />
          <span className='helper-text'>Enter a name for the transaction</span>
          <TextField
            name='name'
            id='transaction-name-input'
            onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => handleChange(target.name, target.value)}
            value={transactionInputValue.name}
          />
          <Label id='transaction-amount-input' label='Amount' />
          <span className='helper-text'>Enter a transaction amount (USD)</span>
          <TextField
            name='amount'
            id='transaction-amount-input'
            onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => handleChange(target.name, target.value)}
            type='number'
            value={transactionInputValue.amount}
          />
          <fieldset className='fieldset'>
            <legend className='form-label'>Pick a type</legend>
            <label htmlFor='income'>Income
              <input
                checked={transactionInputValue.type === 'income'}
                className='input radio'
                id='income'
                name='type'
                onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => handleChange(target.name, target.value)}
                type='radio'
                value='income'
              />
            </label>
            <label htmlFor='expense'>Expense
              <input
                checked={transactionInputValue.type === 'expense'}
                className='input radio'
                id='expense'
                name='type'
                onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => handleChange(target.name, target.value)}
                type='radio'
                value='expense'
              />
            </label>
          </fieldset>
          <label htmlFor='transaction-category-select' className='form-label'>Category:</label>
          <span className='helper-text'>Only available for expenses</span>
          <Select
            disabled={transactionInputValue.type !== 'expense'}
            id='transaction-category-select'
            name='category'
            onChange={({ target }: React.ChangeEvent<HTMLSelectElement>) => handleChange(target.name, target.value)}
            value={transactionInputValue.category}
          >
            <option value='' disabled>Select a category</option>
            {categories.map((category, i) => (
              <option
                key={`${category}-${i}`}
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
      <div>
        <Table title='Income' transactionArray={transactionArray} transactionType='income' setTransactionArray={setTransactionArray} />
        <Table title='Expenses' transactionArray={transactionArray} transactionType='expense' setTransactionArray={setTransactionArray} />
      </div>
    </div>
  );
};
