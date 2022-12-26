
import Contact from "../Contact/Contact"
import Navbar from "../Navbar/navbar"
import {useLocation} from 'react-router-dom'
import { useEffect } from "react"
import { useForm} from 'react-hook-form';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import './About.css'
// const { register, handleSubmit, formState:{ errors } } = useForm({
//    resolver: yupResolver(schema)
//});
/*
 const numberRegex = RegExp(
          /^[0-9]+$/
      )
const schema = Yup.object({
     first_name: Yup.string().required("Required"),
     phone :Yup.string().match(regex, "Invalid phone").required("Required")
})
*/

const submit = async(data) =>{
    console.log(data.Firstname)
}

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
            <form className="registration">
                <input type="text" {...register("Firstname")}name="Firstname" placeholder="Firstname"/>
                {error.Firstname? <p>{error.Firstname.message}</p>:null}
                <input type="text" name="Lastname" placeholder="Lastname"/>
                <input type="password" name="password" placeholder="password"/>
                <input type="text" name="Phone" placeholder="phone"/>
                <button onClick={handleSubmit(submit)}>Submit</button>
            </form>
        </div>
        </>
    )
}

export default About

