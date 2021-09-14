import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {useFetch} from '../customHooks/useFetch'
import { Table } from './ui/table/Table'


export const Orders = () => {
    const url = 'https://fract-crud.herokuapp.com/api/order/all'
    const datos = useFetch(url);
    let dataobject=[] ;
    const [state, setState] = useState([])
    console.log(datos)
    useEffect(() => {
        if(datos.loading === false){
            datos.data.map(({id,customer,status,date,totalAmount}) =>{
                dataobject.push({id,customer,status,date,totalAmount})
            })
            setState(dataobject)
        }
    }, [datos])
    
    
    const headers= ['Nro','Customer','Status','Date','Total','Actions']
    return (
        <div className="order__container">
            <h1>Welcome to list Orders</h1>
            <Link className="btn" to="/createOrder">Create Order</Link>
            <Table headers={headers} state={state} toUrl={"/editOrder"}/>
        </div>
    )
}
