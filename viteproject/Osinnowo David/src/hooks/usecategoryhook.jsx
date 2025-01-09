import { useQuery } from "react-query";
import axios from "axios";
const fetchcetagory = ({queryKey}) =>{
    const id =queryKey[1]
    return axios.get(`http://localhost:5000/api/product/listproducts/${id}`)
}
export const useCategorylist =(id) =>{
    return useQuery(['category',id], fetchcetagory)

}
