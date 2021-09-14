import React, { useEffect, useState } from 'react'
import {useFetch} from '../../customHooks/useFetch'
import { Table } from '../ui/table/Table'

export const EditOrder = ({location}) => {

    const url = `https://fract-crud.herokuapp.com/api/order/byId/${location.id}`
    const datos = useFetch(url);

    const [state, setState] = useState([])

    useEffect(() => {
        if(datos.loading === false){
            setState(datos.data)
        }
    }, [datos])

    useEffect(() => {
        
    }, [datos])
    console.log(datos)

    const handlerUpdateState = (stateOrder) => {
        
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({...state,status: stateOrder});
        let requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        

        fetch("https://fract-crud.herokuapp.com/api/order/update", requestOptions)
        .then(response => response.json())
        .then(result => setState(result))
        .catch(error => console.log('error', error));

    }

    const headers= ['Nro','Name Product','Category','Total','State','Quantity','Actions']

    return (
        <div>
            <div>
                <h1>Orden {state.id}</h1>
                <button>Back</button>
            </div>
            <div>
                <div>Customer: {state.customer}</div>
                <div>Status: {state.status}</div>
                <div>Date: {state.date}</div>
            </div>
            <Table headers={headers} state={state.products || []} remove={true}/>
            <button>add item</button>
            <div>
                <div><span>Subtotal : </span> <span>{state.taxesAmount}</span></div>
                <div>
                    {/* <h1>Taxes : </h1> */}
                    {/* <GridAmounts>
                        <div>
                            <h3>Total City Tax : </h3> <p>dd</p> 
                        </div>
                        <div>
                            <h3>Total County Tax : </h3> <p>ff</p> 
                        </div>
                        <div>
                            <h3>Total State Tax : </h3> <p>gg</p> 
                        </div>
                        <div>
                            <h3>Total Federeal Tax : </h3> <p>hh</p> 
                        </div>
                    </GridAmounts> */}
                </div>
                <div><span>Total Taxes : </span> <span>{state.taxesTotal}</span> </div>
                <div><span>Total : </span> <span>{state.totalAmount}</span> </div>
                <div>
                {
                    state.status === 'pending'
                        ?
                            (
                                <div>
                                    <button onClick={() =>handlerUpdateState('complete')}>Complete Order</button>
                                    <button onClick={() =>handlerUpdateState('reject')}>Reject Order</button>
                                </div>
                            )
                        :
                        null
                    
                }
                </div>
            </div>
        </div>
    )
}
