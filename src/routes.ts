import { Router } from 'express'
import multer from 'multer'
import { ManipulateFileController } from './controllers/ManipulateFileController'

const multerConfig = multer()

const router = Router()

const manipulateFileController = new ManipulateFileController()

router.post(
  '/products',
  multerConfig.single('file'),
  manipulateFileController.handle
)

export { router }
