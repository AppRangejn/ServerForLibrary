const yup = require('yup');

const bookSchema = yup.object().shape({
  title: yup.string().trim().min(1).max(100).required().nullable(),
  genre_id: yup.number().integer().positive().required().nullable(),
  shelf_id: yup.number().integer().positive().required().nullable(),
  description: yup.string().trim().nullable(),
});

module.exports = bookSchema;
