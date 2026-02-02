import express from 'express'
import { commnentControll } from './comment.controller';

import { midddleware, UserRole } from '../modules/post/post.router';

const router =  express.Router();
router.get('/author/:authorId', commnentControll.getauthor)

 router.get('/:commentId', commnentControll.getComment)

router.post('/', midddleware(UserRole.ADMIN, UserRole.USER), commnentControll.createComment)


router.delete('/:commentId', midddleware(UserRole.ADMIN, UserRole.USER), commnentControll.deleteCommnet);
router.patch('/:commentId', midddleware(UserRole.ADMIN, UserRole.USER), commnentControll.commentUpdate)

 export const  commentRouter = router;