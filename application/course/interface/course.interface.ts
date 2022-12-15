import { ObjectId } from "mongodb";

export interface ICourse {
    _id?: ObjectId;
    title: string;
    price: number;
}