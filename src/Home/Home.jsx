import './Home.css'
import { useState } from 'react'

function Home(){
    const [data, setData] = useState("Ram")
    const [obj, setObj] = useState({})
    const [arr, setArr] = useState([1,2,3,4])
    function update(){
        setData("Kumar")
        
    }
    return(
        <div className="home">
            <h1>{data}</h1>
            <button onClick={update}>Click</button>
        </div>
    )
}

export default Home