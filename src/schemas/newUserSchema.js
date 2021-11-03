import joi from "joi";

const newUserSchema = joi.object({
    name: joi.string().min(3).max(50).required().messages({
        "string.min": "Name must have at least 3 characters",
        "string.max": "Name must not exceed 50 characters",
    }),
    email: joi.string().required(),
    password: joi.string().min(6).max(16).required().messages({
        "string.min": "Password must have at least 6 characters",
        "string.max": "Password must not exceed 16 characters",
    }),
});

export default newUserSchema;
