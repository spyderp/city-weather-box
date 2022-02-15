import React from 'react';
import Swal from "sweetalert2";

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { navbarClose } from '../../actions/ui';
import { startAddCity } from '../../actions/weatherBox';

import { useForm } from '../../hooks/useForm';

export const NavBar = () => {
    const dispatch = useDispatch()
    const { ui:{navbar}, weatherBox:{cities} } = useSelector(state => state)
    const [{city}, handleInputChange, reset] = useForm({
        city:''
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(isFormValid()){
            dispatch(startAddCity(city));
            dispatch(navbarClose());
            reset();
        }
    }

    const isFormValid = () => {
        if(city.trim().length === 0){
            Swal.fire('Error', 'City is required', 'error')
            return false
        }
        if(city.trim().length < 4){
            Swal.fire('Error', 'City min lenght is 4 character', 'error')
            return false
        }
        const existsCity = cities.filter( city=>city.location.name === city);
        if(existsCity.length>0){
            Swal.fire('Error', 'The city exists in register', 'error')
            return false 
        }

        return true;
    }

    const handleCloseNavbar = ()=>{
        dispatch(navbarClose());
    }
    
    return ( navbar && (
        <nav className="navbar navbar-dark bg-dark bg-gradient fixed-top animate__animated animate__fadeInDown">
            <div className="container-fluid" >
                <form className="d-flex" onSubmit={handleSubmit} style={{width:'100%'}}>
                    <input type="text" className="form-control me-2 flex-fill " name="city" placeholder="Type name for city" value={city} onChange={handleInputChange} />   
                    <button type="submit" className="  flex-fill btn btn-primary btn-lg">Add</button>
                    <button type="button" className=" flex-fill btn btn-danger btn-lg mx-1" onClick={handleCloseNavbar}>Cancel</button>
                </form>
            </div>
        </nav>
        )
    )
}
