const VALIDATION_SCHEMA = require('../utils/validationSchemas');

module.exports.validate = async (req, res, next) => {
  const { body } = req;

  try {
    const validated = await VALIDATION_SCHEMA.validate(body, {
      abortEarly: false,
    });
    req.body = validated;
    next();
  } catch (error) {
    next(error);
  }
};
