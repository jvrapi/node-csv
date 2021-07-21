import { Readable } from 'stream'
import readLine from 'readline'
import { CreateProductService, Product } from './CreateProductService'

class ManipulateFileService {
  async execute(buffer: Buffer) {
    const readableFile = new Readable()
    const createProductService = new CreateProductService()
    readableFile.push(buffer)
    readableFile.push(null)

    const productsLine = readLine.createInterface({
      input: readableFile
    })

    const products: Product[] = []
    const productsCreated: Product[] = []

    for await (const line of productsLine) {
      const productLineSplit = line.split(',')
      products.push({
        code_bar: productLineSplit[0],
        description: productLineSplit[1],
        price: Number(productLineSplit[2]),
        quantity: Number(productLineSplit[3])
      })
    }

    for await (const product of products) {
      const productCreated = await createProductService.execute(product)
      productsCreated.push(productCreated)
    }

    return productsCreated
  }
}

export { ManipulateFileService }
