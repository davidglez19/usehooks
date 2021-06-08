import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {

    const [stateFetch, setStateFetch] = useState({ data: null, loading: true, error: null });

    const isMounted = useRef(true);

    useEffect(() => {

        return isMounted.current = false
    }, [])

    useEffect(() => {
        setStateFetch({ data: null, loading: true, error: null });
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted) {
                    setStateFetch({
                        loading: false,
                        error: null,
                        data
                    })
                }
            })
    }, [url])


    return stateFetch;

}
