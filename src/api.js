import axios from "axios"

const baseURL =  axios.create({
    baseURL: "https://61c5b49ac003e70017b7987a.mockapi.io/shoes"
})


export default class api{
    static getItems = async () =>{
        const {data} =  await baseURL.get("/");
        return data
    }
}


