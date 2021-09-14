import { useEffect, useRef, useState } from "react"
// let options = {
//     method: 'GET',
//     redirect: 'follow'
// };
export const useFetch = (url,requestOptions) => {
    const [state, setState] = useState({ data: null, error: false, loading: true });

    const ref = useRef(true)// mantenemos refencia, es como utilizar una variable de estado
    // la diferencia es que esta variable se mantendra a en un contexto superior en el cual 
    // no se mantendra a pesar de que el componente se vuelva a renderizar

    useEffect(() => {
        return (() => {
            ref.current = false;
        })
    }, [])

    useEffect(() => {

        setState({ data: null, error: false, loading: true }) // para evitar warning 
        //no usar el spreed del objeto

        fetch(url,requestOptions)
            .then((result) => result.json())
            .then((data) => {
                if (ref.current) {
                    setState(() => {
                        return {
                            data,
                            error: false,
                            loading: false
                        }
                    })
                }
            })
            .catch(() => {
                setState(() => {
                    return {
                        data: null,
                        error: true,
                        loading: false
                    }
                })
            })
    }, [url])
    return state;
}