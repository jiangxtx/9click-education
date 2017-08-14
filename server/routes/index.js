/**
 * Created by Jiangxtx on 2017/8/14-19:14.
 * Description:
 */

import Router from 'koa-router'
import user from '../controllers/user'

const router = new Router({
    prefix: '/user',
})

router.get('/getUserInfo', user.getUserInfo())
router.get('/getUsersList', user.getUsersList())

export default router