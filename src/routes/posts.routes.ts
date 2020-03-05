import { Router } from 'express';

import * as postsCtrl from '../controllers/posts.controller';

const router = Router();

router.route('/').get(postsCtrl.getAll);

router.route('/:id').get(postsCtrl.findById);

router.route('/').post(postsCtrl.postPost);

router.route('/:id').put(postsCtrl.updatePost);

router.route('/:id').delete(postsCtrl.deletePost);

export default router;