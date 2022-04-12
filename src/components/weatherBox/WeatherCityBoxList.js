import React from 'react'
import { useSelector } from 'react-redux'
import WeatherBox from './WeatherBox'

export const WeatherCityBoxList = () => {
    const { ui:{ loading }, weatherBox:{ cities } } = useSelector(state => state);
    return (
        <>
        {!loading?(
            <div className="container-fluid">
                    <div className="d-flex flex-wrap justify-content-center p-3">
                        {cities.map( city =>(
                            <WeatherBox key={city.location.tz_id + Math.round(city.location.lat * city.location.lon).toString()} city={city}>
                                
                            </WeatherBox>
                        )) }
                    </div>
                
            </div>
            ):'loading...'
        }
        </>
    )
}
