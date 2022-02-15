import React from 'react'
import { useDispatch } from 'react-redux'
import { navbarOpen } from '../../actions/ui';

export const NewBox = () => {
    const dispatch = useDispatch();
    const openCreateForm = () =>{
        dispatch(navbarOpen())
    }
    return (
        <button className="btn btn-primary ui__btnfix-br" onClick={openCreateForm}>
            <i className="fas  fa-plus"></i>
        </button>
    )
}
