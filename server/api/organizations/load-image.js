import multer from 'multer'
import { callNodeListener } from 'h3'
import * as fs from 'fs'
import { sequelize } from '~/server/db.js'

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    if (await !fs.existsSync('public/img/organizations')) await fs.mkdirSync('public/img/organizations') // проверка наличия директории и создание если она отсутствует
    cb(null, 'public/img/organizations')
  },
  filename: function (req, file, cb) {
    cb(null, req.body.name)
  },
})

const upload = multer({
  storage: storage,
})

export default defineEventHandler(async event => {
  try {
    await callNodeListener(upload.single('file'), event.node.req, event.node.res)
    return { success: true }
  } catch (e) {
    return createError({
      message: e.message,
      statusCode: 422,
      statusMessage: 'Unprocessable Entity',
    })
  }
})
