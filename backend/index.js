const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const responseRoutes = require('./routes/responseRoutes');
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = 'mongodb+srv://thornay7:thornay7@cluster0.r1bci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
app.use(cors());
app.use(bodyParser.json());
// MongoDB connection
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.use('/api', responseRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
