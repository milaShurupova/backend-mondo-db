import { db as dbMongoose } from "../../../mongoose/mongoose";
import { courseSchema } from "../../../mongoose/schema/course.schema";
import { ICourse } from "../interface";

export const CourseModel = dbMongoose.model<ICourse>("Course", courseSchema, "courses");
