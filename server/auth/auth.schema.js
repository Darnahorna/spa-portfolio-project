import Joi from "joi";

export const schema = Joi.object({
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

  repeat_password: Joi.ref("password"),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net", "se"] },
  }),

  first_name: Joi.string().min(1).max(30),
  last_name: Joi.string().min(1).max(30),
}).unknown(false);
