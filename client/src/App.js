import { useEffect, useState } from 'react';
import { getItems, postItem } from './apiCalls';
import './styles.scss';
import { Button, Label, Select, Table, TextField } from "./components";
import { categories } from './helpers/categories';

export const App = () => {
  const initialItemState = { name: '', type: '', category: '', amount: '', };

  const [itemInputValue, setItemInputValue] = useState(initialItemState);
  const [itemArray, setItemArray] = useState([]);

  useEffect(() => {
    getItems(setItemArray);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    postItem(itemArray, itemInputValue, setItemArray);
    console.log(itemInputValue);
    setItemInputValue(initialItemState);
  };

  const handleChange = (name, value) => {
    setItemInputValue({ ...itemInputValue, [name]: value });
  };

  return (
    <div className='app'>
      <h1>Budget</h1>
      <div className='form-wrapper'>
        <h2>Add item</h2>
        <form className='form' onSubmit={handleSubmit}>
          <Label id='item-name-input' label='Name:' />
          <TextField
            name='name'
            id='item-name-input'
            onChange={({ target }) => handleChange(target.name, target.value)}
            value={itemInputValue.name}
          />
          <Label id='item-amount-input' label='Amount:' />
          <TextField
            name='amount'
            id='item-amount-input'
            onChange={({ target }) => handleChange(target.name, target.value)}
            type='number'
            value={itemInputValue.amount}
          />
          <ul>
            <label className='form-label'>Pick a type:</label>
            <li>
              <label htmlFor='income'>Income:</label>
              <input
                checked={itemInputValue.type === 'income'}
                className='input radio'
                id='income'
                name='type'
                onChange={({ target }) => handleChange(target.name, target.value)}
                type='radio'
                value='income'
              />
            </li>
            <li>
              <label htmlFor='expense'>Expense:</label>
              <input
                checked={itemInputValue.type === 'expense'}
                className='input radio'
                id='expense'
                name='type'
                onChange={({ target }) => handleChange(target.name, target.value)}
                type='radio'
                value='expense'
              />
            </li>
          </ul>
          <label htmlFor='item-category-select' className='form-label'>Category:</label>
          <span className='helper-text'>Only available for expenses</span>
          <Select
            disabled={itemInputValue.type !== 'expense'}
            id='item-category-select'
            onChange={({ target }) => handleChange(target.name, target.value)}
            value={itemInputValue.category}
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
              onClick={() => setItemInputValue(initialItemState)}
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
      {itemArray.length > 0 &&
        <div className='table-wrapper'>
          <h2>Income</h2>
          <Table itemArray={itemArray} itemType='income' setItemArray={setItemArray} />
          <h2>Expenses</h2>
          <Table itemArray={itemArray} itemType='expense' setItemArray={setItemArray} />
        </div>}
    </div>
  );
};
