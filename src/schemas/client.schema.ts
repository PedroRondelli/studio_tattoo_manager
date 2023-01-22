import joi from "joi";

export const clientSchema = joi.object({
  name: joi.string().min(3).required(),
  date: joi.date().required || joi.string().required(),
  description: joi.string().required(),
  payment: joi.string().required(),
  paid: joi.boolean().required(),
});
