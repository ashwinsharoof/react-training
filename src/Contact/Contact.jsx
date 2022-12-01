import { useContext, useEffect, useRef, useState } from "react"
import { UserContext } from "../App"
import Navbar from "../Navbar/navbar"
import useFetch from "./fetch"

function Contact(){
    const user = useContext(UserContext)
    const [count, setCount] = useState(1)
    const refCount = useRef(1)
    const data = useFetch("https://jsonplaceholder.typicode.com/todos/1") // get method

   
  
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