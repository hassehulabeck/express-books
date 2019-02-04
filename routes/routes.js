const express = require('express');
const router = express.Router();
var books = require('../books.json');

function getBook(bookId) {
  var bok = books.find(function(book){
    return book.bookId == bookId
  });
  return bok;
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
