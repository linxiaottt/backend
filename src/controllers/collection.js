import { TCollection } from '../models';

export async function Collect (ctx) {
    let { username } = ctx.request.body;
    const { code, market } = ctx.request.body;
    username = username || ctx.session.username;
    if (!username) return ctx.body = { code: 400, msg: '请登录' };
    if (!(code && market)) return ctx.body = { code: 400, msg: '股票信息有误，收藏失败' };
    const result = await TCollection.find({ where: { username, stockId: code, stockMarket: market } });
    if (result && result.id) return ctx.body = { code: 400, msg: '收藏已存在' };
    const status = await TCollection.create({ username, stockId: code, stockMarket: market });
    return ctx.body = { code: 200, msg: '收藏成功', data: { success: true }};
}
export async function UnCollect (ctx) {
    let { username } = ctx.query;
    const { code, market } = ctx.query;
    username = username || ctx.session.username;
    if (!username) return ctx.body = { code: 400, msg: '请登录' };
    if (!(code && market)) return ctx.body = { code: 400, msg: '股票信息有误，取消收藏失败' };
    const result = await TCollection.destroy({ where: { username, stockId: code, stockMarket: market } });
    if (result && result > 0) return ctx.body = { code: 200, msg: '取消收藏成功' };
    return ctx.body = { code: 400, msg: '取消收藏失败'};
}

export async function GetCollected (ctx) {
    let { username } = ctx.query;
    username = username || ctx.session.username;
    if (!username) return ctx.body = { code: 400, msg: '请登录' };
    const result = await TCollection.findAll({ where: { username }});
    return ctx.body = { code: 200, msg: '查询成功', data: result };
}

export async function HasCollected (ctx) {
    let has = false;
    let { username } = ctx.query;
    const { code, market } = ctx.query;
    username = username || ctx.session.username;
    if (!username) return ctx.body = { code: 400, msg: '请登录' };
    const result = await TCollection.findOne({ where: { stockId: code, stockMarket: market, username } });
    console.log(result);
    if (result && result.id) has = true;
    return ctx.body = { code: 200, data: { has }};

}
