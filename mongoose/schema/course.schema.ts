import { Schema } from "mongoose";

const courseSchema = new Schema({
    title: { type: String, require: true },
    price: Number,
});

const validateTitle = (title: string) => {
    return title && title.length > 3;
};

courseSchema.path("title").validate(validateTitle);

export { courseSchema };