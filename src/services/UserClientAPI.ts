import { ClientAPI } from "./api"

interface HomeDataProps {
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
  
class UserClientAPI extends ClientAPI {

    baseURL: string = 'http://localhost:8080/user'


    get = (id: number) => {

        

        this.api.post(this.baseURL+'/get', {
            userId: id
        })
        .then((response) => {
            dataResponse.valid = response.data.created
        })
        .catch((err) => {
            dataResponse.error = true
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
    
  