import { Item } from '../models/Item.js';

export const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getItem = async (req, res) => {
  try {
    const item = await Item.findById({ _id: req.params.id });
    res.status(200).json(item);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};


export const addItem = async (req, res) => {
  const item = req.body;
  const newItem = new Item(item);

  try {
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete({ _id: req.params.id });
    res.status(200);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
