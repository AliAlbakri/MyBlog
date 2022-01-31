import { useState, useEffect } from "react"
const useFetch = (url) =>{
    const [data,setData] = useState(null)
    const [isFetching,setIsFetching] = useState(true)
    useEffect(()=>{
        fetch(url)
        .then(res=>{
            return res.json()
        })
        .then(data =>{
            setData(data)
            setIsFetching(false)
        })
        
    },[url])

    return {data,isFetching}

}

export default useFetch;