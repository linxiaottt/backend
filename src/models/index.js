// let requireDirectory = require('require-directory')
// module.exports = requireDirectory(module)

import { resolve } from 'path'
import Sequelize from '../lib/sequelize'

const dir = __dirname
export const TUser = Sequelize.import(resolve(dir, 'tbl_user.js'))
// 注释掉下方 同步创建表。
// TUser.sync()
