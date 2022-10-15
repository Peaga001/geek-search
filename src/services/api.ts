import { useIonAlert } from "@ionic/react";
import axios from "axios";
import { useHistory } from "react-router";

const api = axios.create({
    baseURL: "http://localhost:8000",
})

export default api