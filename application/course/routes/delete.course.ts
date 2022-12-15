import { Router, Request, Response } from "express";
import { deleteCourseAsync, deleteCourse, deleteCourseByTitlePrice  } from "../service";

const route = Router();

route.delete('/', async (req: Request, res: Response) => {
    console.log("id to remove", req.query);
    console.log("id to remove title", req.query.title);
    console.log("id to remove price", req.query.price);
    if (req.query && req.query.title && req.query.price) {
        let result = await deleteCourseAsync(req.query.title as string, parseInt(req.query.price as string));
        res.send(result);
    }
});

route.delete('/:id', async (req: Request, res: Response) => {
    console.log("id to remove", req.params.id);
    let result = await deleteCourse(req.params.id);
    res.send(result);
});

route.delete('/:title/:price', async (req: Request, res: Response) => {
    if (req.params && req.params.title && req.params.price) {
        let title = req.params.title as string;
        let price = req.params.price;
        let result = await deleteCourseByTitlePrice(title, parseInt(price as string));
        res.send(result);
    }

});

export { route as deleteCourse };