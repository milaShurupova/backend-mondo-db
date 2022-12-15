import { isValidObjectId } from "mongoose";
import { ICourse } from "../interface";
import { CourseModel } from "../models/model";



export const deleteCourse = async (id: string) => {
    if (isValidObjectId(id)) {
        let result = await CourseModel.deleteOne({ _id: id });
        return result.acknowledged;
    }
    return false;
};

export const deleteCourseByTitlePrice = async (title: string, price: number) => {
    if (title && price) {
        let query = { title: title, price: price };
        let result = await CourseModel.deleteMany(query);
        return result.acknowledged;
    }
    return false;
};

export const deleteCourseAsync = async (title: string, price: number) => {
    if (title && price) {
        let query = { title: title, price: price };
        let result = await CourseModel.deleteMany(query);
        return result.acknowledged;
    }
    return false;
};


