const db = require('../../db');

class AuthorController {
  async getAuthors(req, res) {
    try {
      const authors = await db.query(`SELECT * FROM authors ORDER BY id`);
      res.json(authors.rows);
    } catch (error) {
      console.log(error);
    }
  }

  async getAuthorById(req, res) {
    try {
      const {
        params: { id },
      } = req;
      const author = await db.query(`SELECT * FROM authors WHERE id = $1`, [
        id,
      ]);
      res.json(author.rows[0]);
    } catch (error) {
      console.log(error);
    }
  }

  async createAuthor(req, res) {
    try {
      const { full_name, email, nationality_id } = req.body;

      const newAuthor = await db.query(
        `INSERT INTO authors (full_name, email, nationality_id, "createdAt", "updatedAt")
         VALUES ($1, $2, $3, NOW(), NOW())
         RETURNING *`,
        [full_name, email, nationality_id],
      );

      res.json(newAuthor.rows[0]);
    } catch (error) {
      console.log(error);
    }
  }

  async updateAuthor(req, res) {
    try {
      const { id, full_name, email, nationality_id } = req.body;

      const updatedAuthor = await db.query(
        `UPDATE authors
        SET
        full_name=$1,
        email=$2,
        nationality_id=$3,
        "updatedAt" = NOW()
        WHERE id = $4
        RETURNING *
        `,
        [full_name, email, nationality_id, id],
      );
      res.json(updatedAuthor.rows[0]);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteAuthor(req, res) {
    try {
      const {
        params: { id },
      } = req;
      const delAuthor = await db.query(
        `DELETE FROM authors
        WHERE id=$1
        RETURNING id`,
        [id],
      );
      res.json(delAuthor.rows[0]);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new AuthorController();
