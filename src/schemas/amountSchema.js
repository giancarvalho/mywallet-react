import joi from "joi";

const amountSchema = joi
    .number()
    .min(0.01)
    .max(1000000000)
    .message("this is customized");

export default amountSchema;
