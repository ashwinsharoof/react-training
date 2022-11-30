import { useContext, useEffect, useRef, useState } from "react"
import { UserContext } from "../App"
import Navbar from "../Navbar/navbar"

function Contact(){
    const user = useContext(UserContext)
    const [count, setCount] = useState(1)
    const refCount = useRef(1)
  
    function update_ref(){
        refCount.current = refCount.current*2
        alert(refCount.current)
    }
    function update_state() {
        setCount(count => count*2)
        alert(count)
    }
    return (
        <>
        <div>
           <Navbar/>
            <button onClick={update_ref}>Ref</button>
            <button onClick={update_state}>State</button>
        </div>
        </> 
    )
}

export default Contact