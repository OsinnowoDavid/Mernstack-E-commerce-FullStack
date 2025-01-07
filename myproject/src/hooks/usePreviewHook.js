
import axios from "axios"
import { useQuery } from "react-query"


const fetchpreviewData = (heroid) => {
    return axios.get(`http://localhost:5000/api/product/listproducts/${heroid}`)
}

export const usePreviewData = (heroid) =>{
    return useQuery(["fetch", heroid],  () => fetchpreviewData(heroid))
}
