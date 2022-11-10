import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

export const App = () => {
  const initialItemState = { name: '', type: '', category: '', amount: '', };

  const [itemInputValue, setItemInputValue] = useState(initialItemState);
  const [itemArray, setItemArray] = useState([]);

  const getItems = async () => {
    try {
      const items = await axios.get("/api/v1/items");
      setItemArray(items.data);
    } catch (error) {
      console.error({ message: error.message });
    }
  };

  const addItem = async (itemToAdd) => {
    try {
      await axios.post("/api/v1/items", itemToAdd);
    } catch (error) {
      console.error({ message: error.message });
    }
  };

  useEffect(() => {
    getItems();
  }, [itemArray]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      addItem(itemInputValue);
      setItemInputValue(initialItemState);
      getItems();
    } catch (error) {
      console.error({ message: error.message });
    }
    getItems();
  };

  const handleChange = (name, value) => {
    setItemInputValue({ ...itemInputValue, [name]: value });
  };

  return (
    <div className='app'>
      <div className='form-wrapper'>
        <h2>Add item</h2>
        <form className='form'>
          <label className='form-label'>Name:</label>
          <input
            name='name'
            onChange={({ target }) => handleChange(target.name, target.value)}
            required
            value={itemInputValue.name}
          />
          <label className='form-label'>Amount:</label>
          <input
            name='amount'
            onChange={({ target }) => handleChange(target.name, target.value)}
            required
            value={itemInputValue.amount}
          />
          <ul>
            <label className='form-label'>Pick a type:</label>
            <li>
              <label htmlFor='income'>Income:</label>
              <input
                checked={itemInputValue.type === 'income'}
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
                id='expense'
                name='type'
                onChange={({ target }) => handleChange(target.name, target.value)}
                type='radio'
                value='expense'
              />
            </li>
          </ul>
          <button
            onClick={(e) => handleSubmit(e)}
            type='submit'
          >
            Submit
          </button>
        </form>
      </div>
      <div className='table-wrapper'>
        <h2>Income</h2>
        <table className='table'>
          <thead className='table-head'>
            <tr>
              <th>Name</th>
              <th className='align-right'>Amount</th>
            </tr>
          </thead>
          <tbody className='table-body'>
            {itemArray
              .filter(item => item.type === 'income')
              .map((item, i) => (
                <tr key={`item-${i}`}>
                  <td>{item.name}</td>
                  <td className='align-right'>${item.amount}</td>
                </tr>
              ))}
          </tbody>
          <tfoot className='table-foot'>
            <tr>
              <th>Total</th>
              <td className='align-right'>
                ${itemArray
                  .filter(item => item.type === 'income')
                  .reduce((acc, item) => acc + item.amount, 0)
                  .toFixed(2)
                }
              </td>
            </tr>
          </tfoot>
        </table>
        <h2>Expenses</h2>
        <table className='table'>
          <thead className='table-head'>
            <tr>
              <th>Name</th>
              <th className='align-right'>Amount</th>
            </tr>
          </thead>
          <tbody className='table-body'>
            {itemArray
              .filter(item => item.type === 'expense')
              .map((item, i) => (
                <tr key={`item-${i}`}>
                  <td>{item.name}</td>
                  <td className='align-right'>${item.amount}</td>
                </tr>
              ))}
          </tbody>
          <tfoot className='table-foot'>
            <tr>
              <th>Total</th>
              <td className='align-right'>
                ${itemArray
                  .filter(item => item.type === 'expense')
                  .reduce((acc, item) => acc + item.amount, 0)
                  .toFixed(2)
                }
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
