import { useContext } from "react"
import { UserContext } from "../App"
import Navbar from "../Navbar/navbar"

function Contact(){
    const user = useContext(UserContext)
    return (
        <>
        <div>
           <Navbar/>
           Contac Us
        </div>
        </> 
    )
}

export default Contact