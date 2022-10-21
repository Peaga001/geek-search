import { ClientAPI } from "./api"

export interface HomeDataProps {
    ItemTitle: string,
    dataItens: string[]
}

export interface UserProps {
    name: string | null,
    email: string,
    password: string,
}

export interface IResponse {
    valid: boolean | any
    error: boolean | any
}

export interface UserData {
    data:HomeDataProps
}

const MockDataHome = 
[
    
    {
        ItemTitle:'Meus Livros',
        dataItens:[
            'RPG 1',
            'RPG 2',
            'RPG 3'
        ]
    },
    {
        ItemTitle:'Meus Jogos',
        dataItens:[
            'RPG 1',
            'RPG 2',
            'RPG 3'
        ]
    },
    {
        ItemTitle:'Meus RPGs',
        dataItens:[
            'RPG 1',
            'RPG 2',
            'RPG 3'
        ]
    },
    {
        ItemTitle:'Meus RPGs',
        dataItens:[
            'RPG 1',
            'RPG 2',
            'RPG 3'
        ]
    }

]
  
class UserClientAPI extends ClientAPI {

    baseURL: string = 'http://localhost:8080/user'


    get = (id: number) => {

        /*const dataResponse = {
            valid: false,
            data: [
                <HomeDataProps>{}
            ]
        }*/

        const dataResponse = {
            valid: true,
            data: MockDataHome
        }

        this.api.post(this.baseURL+'/get', {
            userId: id
        })
        .then((response) => {
            dataResponse.valid = response.data.valid
            dataResponse.data = response.data.dados
        })
        .catch((err) => {
            dataResponse.valid = false
        })

        return dataResponse
    }

    create = (signUpData: UserProps) => {
        
        let dataResponse: IResponse = {
            valid: false,
            error: false
        }

        this.api.post(this.baseURL+'/create', {
            signUpData
        })
        .then((response) => {
            dataResponse.valid = response.data.created
        })
        .catch((err) => {
            dataResponse.error = true
        })

        return dataResponse
    }

    login = (loginData: UserProps) => {

        let dataResponse: IResponse = {
            valid: false,
            error: false
        }

        this.api.post(this.baseURL+'/login', {
            loginData
        })
        .then((response) => {
            dataResponse.valid = response.data.valid
        })
        .catch((err) => {
            dataResponse.error = true
        })

        return dataResponse
    }
}

export { UserClientAPI }
export default UserClientAPI
    
  