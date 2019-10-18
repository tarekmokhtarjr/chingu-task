require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected !'));

app.use(express.json());

const appRouter = require('./routes/routes');

app.use('/', appRouter);

app.listen(3000, () => console.log('Server Started !'));
