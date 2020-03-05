import { Request, Response } from 'express';

export function indexController(req: Request, res: Response): Response {
    return res.status(200).json({
        ok: true,
        message: 'Hello!!'
    });
}