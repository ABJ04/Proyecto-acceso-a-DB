const express = require('express');
const cors = require('cors');
const postRoutes = require('./routes/posts.routes');

const dotenv = require('dotenv');
dotenv.config(); 

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use('/posts', postRoutes);

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});
