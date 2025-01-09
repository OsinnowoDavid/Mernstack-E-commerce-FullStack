import axios from "axios";
import {  useMutation,useQueryClient } from "react-query";

const useDelete = () =>{
    const queryclent = useQueryClient()

const deletefm = async (id) =>{
    const{data} = await axios.delete(`http://localhost:5000/api/categories/getcategorie${id}`)
    queryclent.invalidateQueries("fecthcate")
    return data

}
return useMutation(deletefm)
}

export default useDelete