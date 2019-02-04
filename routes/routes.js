const express = require('express');
const router = express.Router();
var books = require('../books.json');

function getBook(bookId) {
  return books.find( book => book.bookId == bookId);
};

router.get("/", (req, res) => {
  res.json(books);
});

router.use("/:bookId", (req, res, next) => {
  let bookId = req.params.bookId;
  let book = getBook(bookId);
  res.json(book);
  next();
})


module.exports = router;
