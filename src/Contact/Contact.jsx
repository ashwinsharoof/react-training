import { useContext } from "react"
import { UserContext } from "../App"

function Contact(){
    const user = useContext(UserContext)
    return (
        <>
        <div>
            Contact: {user}
            
        </div>
        </> 
    )
}

export default Contact