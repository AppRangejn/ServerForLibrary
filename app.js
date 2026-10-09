const AuthorController = require('./src/controllers/authorController');
const BookController = require('./src/controllers/bookController');
const CustomerContoller = require('./src/controllers/customerController');
const express = require('express');

const app = express();

app.use(express.json());

app.get('/authors', AuthorController.getAuthors);
app.get('/authors/:id', AuthorController.getAuthorById);
app.post('/authors', AuthorController.createAuthor);
app.put('/authors', AuthorController.updateAuthor);
app.delete('/authors/:id', AuthorController.deleteAuthor);

app.get('/books', BookController.getBooks);
app.get('/books/:id', BookController.getBookById);
app.post('/books', BookController.createBook);
app.put('/books', BookController.updateBook);
app.delete('/books/:id', BookController.deleteBook);

app.get('/customer', CustomerContoller.getCustomer);
app.get('/customer/:id', CustomerContoller.getCustomerById);
app.post('/customer', CustomerContoller.createCustomer);
app.put('/customer', CustomerContoller.updateCustomer);
app.delete('/customer/:id', CustomerContoller.deleteCustomer);

module.exports = app;
