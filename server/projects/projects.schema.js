import Joi from "joi";

export const schema = Joi.object({
  name: Joi.string().min(1).max(100).required().required(),
  description: Joi.string().min(1).max(500).required(),
  date: Joi.date().required(),
  link: Joi.string().min(1).max(100).required(),
  img: Joi.string().min(1).max(100).required(),
  userId: Joi.number().required(),
}).unknown(false);
