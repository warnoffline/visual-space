import axios from "axios";

type personalData = {
    name: string;
    phone: string;
    comment: string;
}

export const personalDataService = {
    send: (data: personalData) => {
        axios.post("http://localhost:8000/api/appeal", data)
    }
}