import axios from 'axios';

export const getItems = async (setItemArray) => {
  try {
    const items = await axios.get('/api/v1/items');
    setItemArray(items.data);
  } catch (error) {
    console.error({ message: error.message });
  }
};

export const postItem = async (itemArray, itemToPost, setItemArray) => {
  try {
    const postedItem = await axios.post('/api/v1/items', itemToPost);
    setItemArray([...itemArray, postedItem.data]);
  } catch (error) {
    console.error({ message: error.message });
  }
};

export const deleteItem = async (idToDelete) => {
  try {
    await axios.delete(`/api/v1/items/${idToDelete}`);
  } catch (error) {
    console.error({ message: error.message });
  }
};
