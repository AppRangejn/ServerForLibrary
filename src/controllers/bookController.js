const db = require('../../db');

class BookController {
  async getBooks(req, res, next) {
    try {
      const books = await db.query(`SELECT * FROM books ORDER BY id`);
      res.json(books.rows);
    } catch (error) {
      next(error);
    }
  }

  async getBookById(req, res, next) {
    try {
      const {
        params: { id },
      } = req;
      const book = await db.query(`SELECT * FROM books WHERE id = $1`, [
        id,
      ]);
      res.json(book.rows[0]);
    } catch (error) {
      next(error);
    }
  }

  async createBook(req, res, next) {
    try {
      const { title, genre_id, shelf_id, description } = req.body;

      const newBook = await db.query(
        `INSERT INTO books (title, genre_id, shelf_id, description, "createdAt", "updatedAt")
         VALUES ($1, $2, $3, $4, NOW(), NOW())
         RETURNING *`,
        [title, genre_id, shelf_id, description],
      );

      res.json(newBook.rows[0]);
    } catch (error) {
      next(error);
    }
  }

  async updateBook(req, res, next) {
    try {
      const { id, title, genre_id, shelf_id, description } = req.body;

      const updatedBook = await db.query(
        `UPDATE books
        SET
        title=$1,
        genre_id=$2,
        shelf_id=$3,
        description=$4,
        "updatedAt" = NOW()
        WHERE id = $5
        RETURNING *
        `,
        [title, genre_id, shelf_id, description, id],
      );
      res.json(updatedBook.rows[0]);
    } catch (error) {
      next(error);
    }
  }

  async deleteBook(req, res, next) {
    try {
      const {
        params: { id },
      } = req;
      const delBook = await db.query(
        `DELETE FROM books
        WHERE id=$1
        RETURNING id`,
        [id],
      );
      res.json(delBook.rows[0]);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new BookController();
