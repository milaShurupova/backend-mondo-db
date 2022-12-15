import { Router, Request, Response } from "express";
import { deleteStudent, deleteStudentByFirstNameLastName } from "../service";

const route = Router();

route.delete('/:id', async (req: Request, res: Response) => {
    console.log("id to remove", req.params.id);
    let result = await deleteStudent(req.params.id);
    res.send(result);
});

route.delete('/:firstName/:lastName', async (req: Request, res: Response) => {
    if (req.params && req.params.firstName && req.params.lastName) {
        let firstName = req.params.firstName as string;
        let lastName = req.params.lastName as string;
        let result = await deleteStudentByFirstNameLastName(firstName, lastName);
        res.send(result);
    }
    
});

export { route as deleteStudentsRoute };