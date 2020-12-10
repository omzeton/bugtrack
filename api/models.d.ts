import { Request, Response, NextFunction } from "express";

export type Endpoint = (req: Request, res: Response, next: NextFunction) => void;
