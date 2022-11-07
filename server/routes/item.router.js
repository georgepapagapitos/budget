import express from 'express';
import { getItems, getItem, addItem, deleteItem } from '../controllers/item.controller.js';

const router = express.Router();

router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", addItem);
router.delete("/:id", deleteItem);

export default router;