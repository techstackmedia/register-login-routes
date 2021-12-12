const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const app = express();
const db = require("./config/keys").MongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
const port = process.env.PORT || 3000;

app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));
app.use("/login", require("./routes/users"));

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`App running on https://localhost:${port}`);
});
