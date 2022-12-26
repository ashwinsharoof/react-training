import './Home.css'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import About from '../About/About'
import Navbar from '../Navbar/navbar'
import {useNavigate} from 'react-router-dom'

function Home(props){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [obj, setObj] = useState(0)
    const [arr, setArr] = useState([1,2,3,4])
    const navigate = useNavigate()
    const counter = useRef(0)
    const [coun, setCoun] = useState(0)

    useEffect(() =>{
        const fetch_data = async()=>{
            let response = await axios.get("https://jsonplaceholder.typicode.com/todos")
            console.log(response)
            if(response){
                setData(response.data)
                setLoading(false)
            }
            
        }
        fetch_data()
     },[])  

     const todo_delete = async(id) =>{
        let response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

     }
     const about = () =>{
        navigate('/about',{state:{name:"Ram",age:21}})
     }
     function handelClick(){
        counter.current++
        alert(counter.current)
     }
     function stateclick(){
        setCoun(coun=> coun+1)
        alert(coun)
     }
    return(
        <div className="home">
            <Navbar/>
            <button onClick={handelClick}>Ref</button>
            <button onClick={stateclick}>State</button>
            {props.data}
        
            {loading? 
            <p>Please wait Loading</p>
            :
            <>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                </tr>

            {data.map((data) => (
                <tr>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td><button>Edit</button></td>
                    <td><button onClick={todo_delete(data.id)}>Delete</button></td>
                </tr>
            ))}
            </table>
            </>
            }
        </div>
    )
}

export default Home