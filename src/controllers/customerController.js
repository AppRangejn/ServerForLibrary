const db = require('../../db');

class CustomerController {
  async getCustomers(req, res, next) {
    try {
      const customer = await db.query(`SELECT * FROM customers ORDER BY id`);
      res.json(customer.rows);
    } catch (error) {
      next(error);
    }
  }

  async getCustomerById(req, res, next) {
    try {
      const {
        params: { id },
      } = req;
      const customer = await db.query(`SELECT * FROM customers WHERE id = $1`, [
        id,
      ]);
      res.json(customer.rows[0]);
    } catch (error) {
      next(error);
    }
  }

  async createCustomer(req, res, next) {
    try {
      const { full_name, email, phone, password } = req.body;

      const newCustomer = await db.query(
        `INSERT INTO customers (full_name, email, phone, "createdAt", "updatedAt", password)
         VALUES ($1, $2, $3, NOW(), NOW(), $4)
         RETURNING *`,
        [full_name, email, phone, password],
      );

      res.json(newCustomer.rows[0]);
    } catch (error) {
      next(error);
    }
  }

  async updateCustomer(req, res, next) {
    try {
      const { id, full_name, email, phone } = req.body;

      const updatedCustomer = await db.query(
        `UPDATE customers
        SET
        full_name=$1,
        email=$2,
        phone=$3,
        "updatedAt" = NOW()
        WHERE id = $4
        RETURNING *
        `,
        [full_name, email, phone, id],
      );
      res.json(updatedCustomer.rows[0]);
    } catch (error) {
      next(error);
    }
  }

  async deleteCustomer(req, res, next) {
    try {
      const {
        params: { id },
      } = req;
      const delCustomer = await db.query(
        `DELETE FROM customers
        WHERE id=$1
        RETURNING id`,
        [id],
      );
      res.json(delCustomer.rows[0]);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CustomerController();
