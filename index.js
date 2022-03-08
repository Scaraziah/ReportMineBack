const connectDB = require('./startup/db');
const express = require('express');
const app = express();
const bitlockers = require('./routes/bitlockers.js')

connectDB();

app.use(express.json());
app.use('/api/bitlockers', bitlockers)

const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
