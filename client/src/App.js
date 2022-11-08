import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

function App() {
  const initialItemState = { name: '', type: '', category: '', amount: null, };

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

  useEffect(() => {
    getItems();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(itemInputValue);
    getItems();
    setItemInputValue(initialItemState);
  };

  console.log(itemArray);

  return (
    <div className='app'>
      <div className='row'>
        <div className='col-6'>
          <form>
            <label>Name:</label>
            <input value={itemInputValue.name} onChange={(e) => setItemInputValue({ ...itemInputValue, name: e.target.value })} />
            <label>Amount:</label>
            <input value={itemInputValue.amount} onChange={(e) => setItemInputValue({ ...itemInputValue, amount: e.target.value })} />
            <button onClick={(e) => handleSubmit(e)}>Submit</button>
          </form>
        </div>
        <div className='col-6'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {itemArray.map((item, i) => (
                <tr key={`item-${i}`}>
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
