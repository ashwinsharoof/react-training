
import Contact from "../Contact/Contact"
import Navbar from "../Navbar/navbar"
import {useLocation} from 'react-router-dom'
import { useEffect } from "react"

function About(){
    const getProps = useLocation()
    useEffect(()=>{
        if(getProps){
        console.log(getProps)
        }
    },[])
    return(
        <>
        <div>
            <Navbar/>
            About page<br/>
            {getProps?
            <h4>{getProps?.state?.name}</h4>
            :null}
        </div>
        </>
    )
}

export default About

