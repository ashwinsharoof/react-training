import './Home.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Home(){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [obj, setObj] = useState(0)
    const [arr, setArr] = useState([1,2,3,4])

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

    return(
        <div className="home">
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