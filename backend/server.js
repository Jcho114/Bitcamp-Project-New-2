const express = require('express');
const router = require('./router');

const app = express();

app.use('/', router);

app.listen(3001, () => {
    console.log('Server started on port 3001');
});