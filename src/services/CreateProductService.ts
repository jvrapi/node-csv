import { client } from '../database/client'

export type Product = {
  code_bar: string
  description: string
  price: number
  quantity: number
}
class CreateProductService {
  async execute({ code_bar, description, price, quantity }: Product) {
    const productInserted = await client.products.create({
      data: {
        code_bar,
        description,
        price,
        quantity
      }
    })
    return productInserted
  }
}

export { CreateProductService }
