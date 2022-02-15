import React, { useEffect } from 'react'
import { NavBar } from './components/ui/NavBar';

import { SettingBar } from './components/ui/SettingBar';
import { useDispatch } from 'react-redux';
import { startLoad, startUpdateWeather } from './actions/weatherBox';
import { WeatherCityBoxList } from './components/weatherBox/WeatherCityBoxList';
import { SettingButton } from './components/ui/SettingButton';
import { NewBox } from './components/ui/NewBox';
import { CloseDelete } from './components/ui/CloseDelete';

import "./sass/style.scss";
import 'animate.css';

export const WeatherCityBox = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(startLoad());
        const setIntervalUpdateWeather = setInterval(
          () =>{
              dispatch(startUpdateWeather())
          },
          3600000  
        );
        return ()=>{
            clearInterval(setIntervalUpdateWeather);
        }
    }, [dispatch])
    
    return (
        <>
            <NavBar />
            <WeatherCityBoxList />
            <CloseDelete />
            <NewBox />
            <SettingButton />
            <SettingBar />
         </>
    )
}
