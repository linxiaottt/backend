import { TUser } from '../models'
export default (ctx) => {
  ctx.body = ctx.request.body
}

export function login (ctx, body) {
  ctx.body = ctx.request.body
}

console.log(TUser.find)
