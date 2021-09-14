import React from 'react'
import { Nav,Img,Item } from './styles'
import { Link, NavLink } from 'react-router-dom'


export const Navbar = () => {
    return (
        <Nav>
            <Link to="http://www.fractal.com.pe/">
                <Img src="https://media-exp1.licdn.com/dms/image/C4D0BAQHktojgePhzZQ/company-logo_200_200/0/1580481226357?e=2159024400&v=beta&t=C1hxLEAUVh7B1nsQU2Mx0uTe2PeTCmrinw8bYd1WaTA" alt="fractalIT" />
            </Link>
            <NavLink 
                to="/orders"
                activeClassName="active"
                >
                <Item>Orders</Item>
            </NavLink>
            <NavLink 
                to="/products"
                activeClassName="active"
                >
                <Item>Products</Item>
                
            </NavLink>
        </Nav>
    )
}
