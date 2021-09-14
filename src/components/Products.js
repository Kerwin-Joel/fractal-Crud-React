import React, { useEffect, useState } from 'react'
import {useFetch} from '../customHooks/useFetch'
import { Table } from './ui/table/Table'

export const Products = (props) => {

    const url = 'https://fract-crud.herokuapp.com/api/product/all'
    const datos = useFetch(url);

    const [state, setState] = useState([])
    useEffect(() => {
        if(datos.loading === false){
            setState(datos.data)
        }
        console.log(datos)
    }, [datos])

    

    const headers= ['Nro','Name','Category','Price','Status','Actions']


    return (
        <>
            <h1>Welcome to list Products</h1>
            <button>Create Product</button>
            <Table headers={headers} state={state} toUrl={"/editProduct"}/>
        </>
    )
}
