import { Router, Request, Response } from "express";
import { deleteStudent, deleteStudentAsync, deleteStudentByFirstNameLastName } from "../service";

const route = Router();

route.delete('/', async (req: Request, res: Response) => {
    console.log("id to remove", req.query);
    console.log("id to remove firstName", req.query.firstName);
    console.log("id to remove lastName", req.query.lastName);
    console.log("id to remove age", req.query.age);
    if (req.query && req.query.firstName && req.query.lastName && req.query.age) {
        let result = await deleteStudentAsync(req.query.firstName as string, req.query.lastName as string, parseInt(req.query.age as string));
        res.send(result);
    }
    //res.send(false);
});

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