import { useIonAlert } from "@ionic/react";
import axios, { Axios } from "axios";
import { useHistory } from "react-router";

export class ClientAPI {

    urlBase:string = ''

    api = axios.create({
        baseURL: this.urlBase,
    })
}

export default ClientAPI
