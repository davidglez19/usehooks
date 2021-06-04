import { useEffect, useState } from "react"

export const useFetch = (url) => {
    
    const [stateFetch, setStateFetch] = useState({data: null, loading: true, error:null});
    
    useEffect( ()=> {
        setStateFetch({data: null, loading:true, error:null});
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setStateFetch({
                    loading: false,
                    error: null,
                    data
                })
            })
    }, [url])


    return stateFetch;

}
