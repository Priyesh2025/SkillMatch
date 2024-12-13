import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Home route
app.get('/', (req, res) => {
    res.send('SkillMatch Backend is running!');
});


// Server listening
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

