const express = require('express');
// const path = require('path');

const app = express();
app.use(express.json());

// Import Routes
const profile = require('./routes/api/profile');
const auth = require('./routes/api/auth');
const product = require('./routes/api/product');

// Use routes
app.use('/api/auth', auth);
app.use('/api/profile', profile);
app.use('/api/product', product);

app.listen(process.env.PORT || 3001);

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
