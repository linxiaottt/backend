module.exports = function () {
  return function (ctx, next) {
    switch (ctx.status) {
      case 404:
        ctx.body = '找不到内容';
        break;
    }
    return next()
  }
}
