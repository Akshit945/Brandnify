const Contact = require('../models/Contact');

const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    const contact = new Contact({ name, email, message });
    await contact.save();

    res.status(201).json({ success: true, message: 'Message received successfully!' });
  } catch (error) {
    console.error('Save contact error:', error);
    res.status(500).json({ error: 'Server error saving contact message.' });
  }
};

module.exports = {
  createContact
};
