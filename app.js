const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));
app.use("/login", require("./routes/users"));

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
