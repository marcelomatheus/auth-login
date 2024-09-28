const expressIndex = require('express');
const dotenv = require('dotenv').config()
const database = require('./database/database')
const app = expressIndex();
const port = 8000;
app.use(expressIndex.json());
app.use('/', require('./routes/authRoutes'))

database();

app.listen(port, ()=>console.log('Server running'))