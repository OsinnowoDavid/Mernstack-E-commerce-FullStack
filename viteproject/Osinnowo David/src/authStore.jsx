import axios from "axios"
import {create} from "zustand"

export  const useAuthStore = create((set) =>({
    isAuthenticated:false,
    user:null,
    ischeckingauth:true,
chechauth: async () =>{
    set ({ischeckingauth:true, eror:null})
    try {
        const response = await axios.get("http://localhost:4000/api/user/check-auth ")
        set ({user: response.data.user, isAuthenticated: true, ischeckingauth:false})
        
    } catch (error) {
        set({error:null, ischeckingauth:false})
        
    }
}

 
}))