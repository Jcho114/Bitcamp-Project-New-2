import express from 'express';

const app = express();

app.get('/api/data', (req, res) => {
    const data = { name: 'John Doe', age: 30 }
    res.json(data);
});

app.listen(3001, () => console.log('Server is running on port 3001'));