const express = require('express');
const app = express();
var port = 3000;

var bookRouter = require('./routes/routes.js');

app.use("/books", bookRouter);

app.listen(port, () => {
  console.log("Nu rullar servern.");
})
