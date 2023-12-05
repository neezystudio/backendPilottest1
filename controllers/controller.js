// controller.js
const Item = require('./models/Item'); // Import your MongoDB model

// Get all items
exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single item by ID
exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new item
exports.createItem = async (req, res) => {
  const item = new Item(req.body);
  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an item by ID
exports.updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedItem) {
      res.json(updatedItem);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an item by ID
exports.deleteItem = async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (deletedItem) {
      res.json({ message: 'Item deleted' });
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
