const Contact = require('../models/Contact');

const createContact = async (req, res) => {
  try {
    const { name, email, phone, plan, message } = req.body;

    if (!name || !message) {
      return res.status(400).json({ error: 'Please provide name and message.' });
    }
    if (!email && !phone) {
      return res.status(400).json({ error: 'Please provide either an email or phone number.' });
    }

    const contact = new Contact({ name, email, phone, plan, message });
    await contact.save();

    res.status(201).json({ success: true, message: 'Message received successfully!' });
  } catch (error) {
    console.error('Save contact error:', error);
    res.status(500).json({ error: 'Server error saving contact message.' });
  }
};

module.exports = { createContact };
