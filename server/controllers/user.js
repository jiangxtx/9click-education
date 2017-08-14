/**
 * 模拟异步获取数据
 * @param ctx
 * @return {Promise.<void>}
 */
async function getUserInfo(ctx) {
    ctx.body = {
        name: 'Jiujiang Xia',
        gender: 'male',
        age: 27
    }
}

async function getUsersList(ctx) {
    ctx.body = {
        code: 0,
        msg: '获取用户列表成功',
        data: [
            { name: 'Jack', age: 23, gender: 'male', city: 'New York' },
            { name: 'Hellen', age: 45, gender: 'female', city: 'England' },
            { name: 'Jiangxtx', age: 27, gender: 'male', city: 'Shanghai' },
            { name: 'Tom Hanks', age: 35, gender: 'female', city: 'Paris' },
            { name: 'Supass Chap', age: 18, gender: 'male', city: 'Beijing' },
        ]
    }
}

export default { getUserInfo, getUsersList }
