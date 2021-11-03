import joi from "joi";

const newUserSchema = joi.object({
    name: joi.string().min(3).max(50).required(),
    email: joi.string().required(),
    password: joi.string().min(4).max(16).required(),
    confirmPassword: joi.ref("password"),
});
