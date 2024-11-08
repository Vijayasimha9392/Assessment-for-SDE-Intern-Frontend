const express = require('express');
const router = express.Router();
const Response = require('../models/Response');

router.post('/responses', async (req, res) => {
  try {
    const { sessionId, responses, status } = req.body;
    const response = new Response({
      sessionId,
      responses,
      status: status || "IN_PROGRESS"
    });
    await response.save();
    res.status(200).json({ message: "Survey responses saved successfully" });
  } catch (error) {
    console.error("Error saving responses:", error);
    res.status(500).json({ message: "An error occurred while saving responses" });
  }
});

module.exports = router;
