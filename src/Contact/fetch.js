import axios from "axios"
import { useEffect, useState } from "react"

function useFetch(url){
    const [data, setData] = useState()

    useEffect(()=>{
        const fetch = async()=>{
            const response = await axios.get(url)
            setData(response)
        }
        fetch()
    },[])

    return[data]
}
export default useFetch