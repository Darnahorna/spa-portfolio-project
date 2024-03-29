/**
 * Give format to the Joi error object
 *
 * @param {ValidationError} error
 * @param {string} source
 * @returns {object}
 */
const formatError = (error) => {
  const { details } = error;
  const errors = details.map((item) => {
    return {
      key: item.context?.key,
      message: item.message,
    };
  });

  return {
    status: 400,
    title: "BAD_REQUEST",
    details: {
      errors,
    },
  };
};

export const validate = (schema) => {
  return async (req, res, next) => {
    const { error } = await schema.validateAsync(req.body).catch((error) => {
      return { error };
    });

    if (error) {
      return res.sendStatus(400).json(formatError(error));
    }

    next();
  };
};
