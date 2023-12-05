// routes.js
const express = require('express');
const router = express.Router();
const { getAllItems, getItemById, createItem, updateItem, deleteItem } = require('./controller');

// Get all items
router.get('/items', getAllItems);

// Get a single item by ID
router.get('/items/:id', getItemById);

// Create a new item
router.post('/items', createItem);

// Update an item by ID
router.put('/items/:id', updateItem);

// Delete an item by ID
router.delete('/items/:id', deleteItem);

module.exports = router;
