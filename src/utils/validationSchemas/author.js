const yup = require('yup');

const authorSchema = yup.object().shape({
  full_name: yup.string().trim().min(2).max(30).required().nullable(),
  email: yup.string().trim().email().required().nullable(),
  nationality_title: yup.string().trim().required(),
});

module.exports = authorSchema;
