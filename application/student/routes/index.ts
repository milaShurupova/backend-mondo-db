import { getStudentsRoute } from "./get.student";
import { postStudentsRoute } from "./post.students";
import { deleteStudentsRoute } from "./delete.students";

export const studentRouter = [getStudentsRoute, postStudentsRoute, deleteStudentsRoute];