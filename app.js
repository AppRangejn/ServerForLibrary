const AuthorController = require('./src/controllers/authorController');
const express = require('express');

const app = express();

app.use(express.json());

app.get('/authors', AuthorController.getAuthors);
app.get('/authors/:id', AuthorController.getAuthorById);
app.post('/authors', AuthorController.createAuthor);
app.put('/authors', AuthorController.updateAuthor);
app.delete('/authors/:id', AuthorController.deleteAuthor);

module.exports = app;
