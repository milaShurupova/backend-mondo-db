import { isValidObjectId } from "mongoose";
import { IStudent } from "../interface";
import { StudentModel } from "../models/model";

export const addStudent = async (student: IStudent): Promise<IStudent> => {
    let nStudent = new StudentModel(student);
    let result = await nStudent.save();
    return result;
};

export const updateStudent = async (student: IStudent) => {
    let updateResult = await StudentModel.updateOne(student);
    if (updateResult.acknowledged) {
        return updateResult;
    } else {
        return null;
    }
};

export const deleteStudent = async (id: string) => {
    if (isValidObjectId(id)) {
        let result = await StudentModel.deleteOne({ _id: id });
        return result.acknowledged;
    }
    return false;
};

export const deleteStudentByFirstNameLastName = async (firstName: string, lastName: string) => {
    if (firstName && lastName) {
        let query = { firstName: firstName, lastName: lastName };
        let result = await StudentModel.deleteMany(query);
        return result.acknowledged;
    }  
    return false;
};

export const deleteStudentAsync = async (firstName: string, lastName: string, age: number) => {
    if (firstName && lastName && age) {
        let query = { firstName: firstName, lastName: lastName, age: age };
        let result = await StudentModel.deleteMany(query);
        return result.acknowledged;
    }
    return false;
};


