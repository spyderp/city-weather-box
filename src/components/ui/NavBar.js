import React, { useState } from 'react';
import Swal from "sweetalert2";
import Autosuggest from 'react-autosuggest';


import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { navbarClose } from '../../actions/ui';
import { startAddCity } from '../../actions/weatherBox';
import { fetchGeo } from "../../helpers/fetch";

import { useForm } from '../../hooks/useForm';

export const NavBar = () => {
    const dispatch = useDispatch()
    const { ui:{navbar}, weatherBox:{cities} } = useSelector(state => state)
    const [{city}, handleInputChange, reset] = useForm({
        city:''
    });
    const [suggestions, setSuggestions] = useState([])
    
    const onChange = (event, { newValue }) => {
        handleInputChange({
            target:{
                name:'city',
                value:newValue
            }
        })
    };

    const inputProps = {
        placeholder: 'Type name for city',
        value: city,
        onChange: onChange,
        className: 'form-control me-2 py-2'
    };
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
    
    const getSuggestionValue = suggestion => suggestion.name;

    const renderSuggestion = suggestion => (
        <div>
            {suggestion.name}
        </div>
    );
    
    const onSuggestionsFetchRequested = async({ value }) => {   
        const inputValue =  value;
        const endpoint = process.env.REACT_APP_API_SEARCH;
        const resp = await fetchGeo(endpoint, inputValue);
        const body = await resp.json();
        setSuggestions( body)   
    };


    const onSuggestionsClearRequested = () => {
        setSuggestions([])
    };
    
    return ( navbar && (
        <nav className="navbar navbar-dark bg-dark bg-gradient fixed-top animate__animated animate__fadeInDown">
            <div className="container-fluid" >
                <form className="d-flex" onSubmit={handleSubmit} style={{width:'100%'}}>
                   {/*  <input type="text" className="form-control me- flex-fill " name="city" placeholder="Type name for city" value={city} onChange={handleInputChange} />    */}
                    <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={onSuggestionsClearRequested}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={inputProps}
                        containerProps={{className:'autoContainer flex-fill me-2 '}}
                    />
                    <button type="submit" className="  flex-fill btn btn-primary btn-lg">Add</button>
                    <button type="button" className=" flex-fill btn btn-danger btn-lg mx-1" onClick={handleCloseNavbar}>Cancel</button>
                </form>
            </div>
        </nav>
        )
    )
}
