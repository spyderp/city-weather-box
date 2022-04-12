import React, { useEffect, useState } from 'react'
import Swal from "sweetalert2";
import moment from 'moment-timezone';

import './WeatherBox.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteButtonOpen } from '../../actions/ui';
import { startRemoveCity } from '../../actions/weatherBox';

const WeatherBox = ({city}) => {
    const [timeNow, setTimeNow] = useState(moment().tz(city.location.tz_id));
    const {ui:{ deleteButton },weatherBox:{ settings }} = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        const setIntervalClock = setInterval(
            ()=>{
                setTimeNow(moment().tz(city.location.tz_id));  
            },
            60000
        );
        return () => {
            clearInterval(setIntervalClock);
        }
    }, [city]);

    const handleShowDelete = () =>{
        dispatch(deleteButtonOpen());    
    }

    const handleDelete = ()=>{
        Swal.fire({
            title: 'Do you want to delete this?',
            showCancelButton: true,
            confirmButtonText: `Yes`,
            denyButtonText: `Don't save`,
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(startRemoveCity(city.location.name));
            } 
          }) 
    }
    return (
        <div className="weather-box flex-row animate__animated  animate__zoomInUp" style={{borderColor: city.current.is_day?'#28BCDC':'#9955ff'}} onDoubleClick={handleShowDelete}>
            { deleteButton && (
                <button className="delete-box animate__animated animate__shakeX" onClick={handleDelete}>
                        <i className="fas fa-trash-alt"></i>
                </button>
            ) 
            }
            <div className=" weatherInfo d-flex flex-column justify-content-end">
                <div className="icon">
                    <figure>
                        <img src={city.current.condition.icon} alt={city.current.condition.text} />
                    </figure>
                </div>
                <div className="temp">
                    Temp: { settings.temperature === 'c' ?city.current.temp_c +'° C':city.current.temp_f +'° F' }
                </div>
                <div className="wind">
                    Wind: { settings.wind === 'km' ?city.current.wind_kph +' km/h':city.current.wind_mph +' mph' }
                </div>
                <div className="humidity mb-2">
                    Humidity: {city.current.humidity} %
                </div> 
            </div>
            <div className=" text-center city-name">
                {city.location.country}, {city.location.name}
            </div>
            <div className=" text-center time">
                {timeNow.format(settings.formatTime ==='AM/PM'?'h:mm a':'HH:mm ')}
            </div>
            <div className="py-1 text-center date">
                {timeNow.format('dddd, DD of MMMM ')}
            </div>
            
        </div>
    )
}



export default WeatherBox
