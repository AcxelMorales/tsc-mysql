import { Request, Response } from 'express';

import { connect } from '../database/db';
import IPost from '../interfaces/IPost';

export async function getAll(req: Request, res: Response): Promise<Response> {
    const cnn = await connect();
    const posts: any[] = await cnn.query('SELECT * FROM posts');

    if (posts[0].length === 0) {
        return res.status(404).json({
            ok: false,
            message: 'No results'
        });
    }
    
    return res.status(200).json({
        ok: true,
        posts: posts[0]
    });
}

export async function findById(req: Request, res: Response): Promise<Response> {
    let id = req.params.id;
    
    const cnn = await connect();
    const posts = await cnn.query('SELECT * FROM posts WHERE id = ?', [id]);

    return res.status(200).json({
        ok: true,
        post: posts[0]
    });
}

export async function postPost(req: Request, res: Response): Promise<Response> {
    let body: IPost = req.body;

    const cnn = await connect();
    await cnn.query('INSERT INTO posts SET ?', [body]);

    return res.status(201).json({
        ok: true
    });
}

export async function updatePost(req: Request, res: Response): Promise<Response> {
    let id = req.params.id;
    let body = req.body;
    
    const cnn = await connect();
    await cnn.query('UPDATE posts SET ? WHERE id = ?', [body, id]);

    return res.status(200).json({
        ok: true
    });
}

export async function deletePost(req: Request, res: Response): Promise<Response> {
    let id = req.params.id;
    
    const cnn = await connect();
    await cnn.query('DELETE FROM posts WHERE id = ?', [id]);

    return res.status(200).json({
        ok: true
    });
}