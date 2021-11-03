import joi from "joi";

const descriptionSchema = joi.string().min(3).max(30);

export default descriptionSchema;
