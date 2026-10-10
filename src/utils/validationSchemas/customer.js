const yup = require('yup');

const customerSchema = yup.object().shape({
  full_name: yup.string().trim().min(2).max(30).required().nullable(),
  email: yup.string().trim().email().required().nullable(),
  phone: yup.string().trim().min(7).max(20).required(),
  password: yup.string().trim().min(6).required(),
});

module.exports = customerSchema;
