import { TUser } from '../models'

export default (ctx) => {
    ctx.body = ctx.request.body
}
export async function Login (ctx) {
    const { username, password } = ctx.request.body;
    if (ctx.session.id) return ctx.body = { code: 400, msg: '用户已登录' };
    console.log(ctx.session);
    if (!(username && password)) return ctx.body = { code: 400, msg: '请输入账号密码' };
    const result = await TUser.find({ where: { username, password}, attributes: ['id', 'username', 'preview']});
    if (!(result && result.id)) return ctx.body = { code: 400, msg: '账号密码错误' };
    ctx.session = { id: result.id,  username };
    return ctx.body = { code: 200, msg: '登陆成功', data: result };
}
export async function Logout (ctx) {
    if (!(ctx.session.id)) return ctx.body = { code: 400, msg: '用户未登录'};
    ctx.session = {};
    return ctx.body = { code: 200, msg: '退出成功' };
}
export async function Register (ctx) {
    const { username, password } = ctx.request.body;
    if (!(username && password)) return ctx.body = { code: 400, msg: '请输入账号密码' };
    const result = await TUser.find({ where: { username }, attributes: ['id', 'username', 'preview']});
    if (result && result.id) return ctx.body = { code: 400, msg: '账号已存在' };
    const status = await TUser.create({ username, password });
    delete status.dataValues.password;
    ctx.session = { id: status.id,  username };
    return ctx.body = { code: 200, msg: '注册成功', data: status };
}
export async function GetMyInfo(ctx) {
    if (!ctx.session.id) return ctx.body = { code: 400, msg: '用户未登录'};
    const { id, username } = ctx.session;
    const result = await TUser.findById(id);
    delete result.dataValues.password;
    return ctx.body = { code: 200, msg: '成功', data: result };
}

