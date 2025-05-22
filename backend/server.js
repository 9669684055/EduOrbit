const { clear } = require("console");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors =  require('cors');
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:3000'  // your frontend URL
}));
app.use(express.json());

main().then(() => {

    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
})

async function main () {
    await mongoose.connect("mongodb://127.0.0.1:27017/eduOrbit");
}



app.get('/' , (req, res) => {
  res.send('Welcome to EduOrbit Backend!')
})
app.get('/api/data', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
