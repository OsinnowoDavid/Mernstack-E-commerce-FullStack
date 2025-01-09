import { useEffect,useRef } from "react"
// import cloudinary from "cloudinary"
const Uplaodwidget = () =>{
    const clodinaryRef = useRef();
    useEffect(() => {
        clodinaryRef.current= window.cloudinary
        console.log(clodinaryRef.current)
    },[])

}


    export default Uplaodwidget