import { Request, Response, Express } from 'express'

import { ManipulateFileService } from '../services/ManipulateFileService'

class ManipulateFileController {
  async handle(request: Request, response: Response) {
    const { buffer } = request.file as Express.Multer.File

    const manipulateFileService = new ManipulateFileService()

    const products = await manipulateFileService.execute(buffer)

    return response.json(products)
  }
}

export { ManipulateFileController }
