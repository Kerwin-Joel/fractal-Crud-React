import React from 'react'
import { Link } from 'react-router-dom'
import { ItemLink } from './styles'

export const Table = ({headers, state,toUrl,remove}) => {
    return (
        <table>
                <thead>
                    <tr>
                        {
                            headers.map(current=>{
                                return (
                                        <th key={current.id}>
                                            {current}
                                        </th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody >
                    {
                        state.map(current=>{
                            return (
                                <tr >
                                    {
                                        Object.keys(current).map((onekey,i)=>{
                                            return (
                                                <td key={i}>{current[onekey]}</td>
                                            )
                                        })
                                    }
                                    
                                    {
                                        remove ?
                                            ( 
                                                <td>
                                                    <ItemLink>
                                                        <Link to={{
                                                            pathname:`${toUrl}`,
                                                            id:current.id
                                                        }}>
                                                            Edit
                                                        </Link>
                                                    </ItemLink>
                                                    <ItemLink>
                                                        <Link to={{
                                                            pathname:`${toUrl}`,
                                                            id:current.id
                                                        }}>
                                                            delete
                                                        </Link>
                                                    </ItemLink>
                                                </td>
                                            )
                                            :
                                            (
                                                <td>
                                        <ItemLink>
                                            <Link to={{
                                                pathname:`${toUrl}`,
                                                id:current.id
                                            }}>
                                                Edit
                                            </Link>
                                        </ItemLink>
                                    </td>
                                            )
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
    )
}
