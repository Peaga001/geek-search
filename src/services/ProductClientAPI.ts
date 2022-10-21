import { ClientAPI } from "./api"


interface ProductProps {
    url:string
    description:string
    price:number
}

export interface ArrayProductProps {
    session:string,
    dataSession:Array<ProductProps>
}

export interface IResponseGet {
    valid: boolean,
    data: Array<ArrayProductProps>
}

const MockDataStore = [
    {
      session:'Livros',
      dataSession:[
        {
          url:'/assets/img/Logo.png',
          description:'Descrição livro 1',
          price:5.0
        },
        {
          url:'/assets/img/Logo.png',
          description:'Descrição livro 2',
          price:7.0
        },
        {
          url:'/assets/img/Logo.png',
          description:'Descrição livro 3',
          price:10.0
        },
        {
          url:'/assets/img/Logo.png',
          description:'Descrição livro 4',
          price:12.0
        },
        {
          url:'/assets/img/Logo.png',
          description:'Descrição livro 5',
          price:5.0
        },
        {
          url:'/assets/img/Logo.png',
          description:'Descrição livro 6',
          price:7.0
        },
        {
          url:'/assets/img/Logo.png',
          description:'Descrição livro 7',
          price:10.0
        },
      
        {
          url:'/assets/img/Logo.png',
          description:'Descrição livro 8',
          price:12.0
        }
      ]
    },
  
    {
      session:'Games',
      dataSession:[
        {
          url:'/assets/img/Logo.png',
          description:'Games 1',
          price:9.0
        },
        {
          url:'/assets/img/Logo.png',
          description:'Games 2',
          price:8.0
        },
        {
          url:'/assets/img/Logo.png',
          description:'Games 3',
          price:12.0
        },
      
        {
          url:'/assets/img/Logo.png',
          description:'Games 4',
          price:5.0
        }
      ]
    }
]
  
class ProductClientAPI extends ClientAPI {

    baseURL: string = 'http://localhost:8080/product'

    get = () => {

        /*const arrayProducts: IResponseGet  = {
            valid:false,
            data:[]
        }*/

        /* Temp */
        const arrayProducts: IResponseGet  = {
            valid:true,
            data:MockDataStore
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
    
  