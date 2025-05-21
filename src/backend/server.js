const { clear } = require("console");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5000;


main().then(() => {

    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
})

async function main () {
    await mongoose.connect(dbUrl);
}


app.use(express.json());

app.get('/' , (req, res) => {
  res.send('Welcome to EduOrbit Backend!')
})
app.get('/api/data', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
