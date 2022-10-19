import { ClientAPI } from "./api"


interface ProductProps {
    url:string
    description:string
    price:number
}

export interface ArrayProductProps {
    sessionTitle:string,
    dataSession:Array<ProductProps>
}

export interface IResponseGet {
    valid: boolean,
    data: Array<ArrayProductProps>
}
  
class ProductClientAPI extends ClientAPI {

    baseURL: string = 'http://localhost:8080/product'

    get = () => {

        let arrayProducts: IResponseGet  = {
            valid:false,
            data:[]
        }

        this.api.get(this.baseURL+'/get')
        .then((response) => {

            arrayProducts.valid = response.data.valid
            arrayProducts.data =  response.data.products
        })
        .catch((err) => {
            arrayProducts.valid = false
        })

        return arrayProducts
    }

}

export { ProductClientAPI }
export default ProductClientAPI
    
  