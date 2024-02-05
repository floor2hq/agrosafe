import { NextFunction, Request, Response } from "express";
import IUser from "../database/model/user.model";
import ROLE from "../constants/role.enum";


interface customReq extends Request {
    user?: IUser
}

export default function isAdmin(req: customReq, res: Response, next: NextFunction) {
    const { user } = req;
    // @ts-ignore
    if (user?.user.role === ROLE.ADMIN) { next() } else {
        res.status(400).send("You Ain't Admin, can't Perform this Operation")
    };
}  
