const express = require("express");
const PORT = process.env.PORT || 8000;
const app = express();

app.get("/", (req, res) => res.send("Hello"));
app.get("/greeting", (req, res) => res.send(`Hello ${req.query.name}`));

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
