import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import { useForm } from '../../customHooks/useForm';

import "react-datepicker/dist/react-datepicker.css";

export const CreateOrder = () => {
    const [startDate, setStartDate] = useState(new Date().toLocaleDateString());
    const [newObjectPost, setnewObjectPost] = useState({})
    const [values, handleInputChange] = useForm({
        name: '',
        price: '',
        category: '',
        customer: '',
        status: 'active',
        quantity: '',
        date: startDate
    })
    const { name, customer, price, category, status, quantity } = values;

    useEffect(() => {
        setnewObjectPost({
            "numberOrder": "99.0",
            "status": "pending",
            "date": values.date,
            "customer": values.customer,
            "products": [
                {
                    "name": values.name,
                    "quantity": values.quantity,
                    "category": values.category,
                    "unitPrice": +values.price,
                    "status": values.status
                }
            ]
        })
    },[values])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newObjectPost)
        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(newObjectPost);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://fract-crud.herokuapp.com/api/order/create", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        
    }

    return (
        <>
            <h1>Create Order</h1>
            <div>
                <div><span>N° Order :</span> <span>4.0</span> </div>
                <div><span>State :</span> <span>Pending</span> </div>
                <div>
                    <span>Date</span>
                    <input type="text" value={startDate} />
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <span>Customer</span>
                        <input
                            type="text"
                            name="customer"
                            placeholder="nombre del cliente"
                            value={customer}
                            autoComplete='off'
                            onChange={handleInputChange}
                        />
                    </div>
                    <h2>Lista de productos</h2>
                    <div>
                        <div>
                            <span>Name</span>
                            <input
                                type="text"
                                name="name"
                                placeholder="nombre del producto"
                                value={name}
                                autoComplete='off'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <span>precio</span>
                            <input
                                type="number"
                                name="price"
                                placeholder="precio del producto"
                                value={price}
                                autoComplete='off'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <span>categoria</span>
                            <input
                                type="text"
                                name="category"
                                placeholder="categoria del producto"
                                value={category}
                                autoComplete='off'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <span>estado</span>
                            <div>
                                <input
                                    type="radio"
                                    name="status"
                                    value='active'
                                    checked={status === 'active'}
                                    onChange={handleInputChange}
                                />
                                <label >Active</label>
                            </div>

                            <div>
                                <input
                                    type="radio"
                                    name="status"
                                    value='inactive'
                                    checked={status !== 'active'}
                                    onChange={handleInputChange}
                                />
                                <label >Inactive</label>
                            </div>
                        </div>
                        <div>
                            <span>cantidad</span>
                            <input
                                type="number"
                                name="quantity"
                                placeholder="cantidad del producto"
                                value={quantity}
                                autoComplete='off'
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div>
                        <button type='submit'>Cancel</button>
                        <button>Save</button>
                    </div>
                </form>
            </div>
        </>
    )
}
