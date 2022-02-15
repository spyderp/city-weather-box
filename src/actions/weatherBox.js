import { types } from "../commons/types";
import { fetchGeo } from "../helpers/fetch";
import { finishLoading, startLoading } from "./ui";


export const startLoad = ()=>{
    return async(dispatch)=>{
        try {
            dispatch(startLoading());
            const serializedData = localStorage.getItem('weatherBoxCity');
            const settings = localStorage.getItem('weatherBoxSettings');
            if(settings !== null){
                dispatch(updateSettings(JSON.parse(settings)));
            }
            if (serializedData !== null){
                let cities = [];
                const listCities = JSON.parse(serializedData);
                const endpoint = process.env.REACT_APP_API_CURRENT;
                listCities.map(async city => {
                    const filter = `${city}&aqi=no`;
                    const resp = await fetchGeo(endpoint, filter);
                    const body = await resp.json();
                    cities.push(body);
                });
                dispatch(loadCities(cities));
            }else{
                dispatch(loadCities([]))
            }
            setTimeout(()=>{
                dispatch(finishLoading());
            }, 2000)
            
        } catch (error) {
            console.log(error)
            dispatch(loadCities([]))
        }
    }
}

export const startUpdateWeather = () =>{
    return async(dispatch)=>{
        const serializedData = localStorage.getItem('weatherBoxCity');
        let cities = [];
        const listCities = JSON.parse(serializedData);
        const endpoint = process.env.REACT_APP_API_CURRENT;
        listCities.map(async city => {
            const filter = `${city}&aqi=no`;
            const resp = await fetchGeo(endpoint, filter);
            const body = await resp.json();
            cities.push(body);
        });
        dispatch(loadCities(cities));
    }
}

const loadCities = (cities) => ({
    type: types.weatherBoxLoaded,
    payload: cities
})

export const startAddCity = (city) =>{
    return async (dispatch, getState) =>{
        const weatherBox = getState().weatherBox;
        const endpoint = process.env.REACT_APP_API_CURRENT;
        const filter = `${city}&aqi=no`;
        const resp = await fetchGeo(endpoint, filter);
        const body = await resp.json();
        const citiesList = weatherBox.cities.length>0?weatherBox.cities.map(data =>data.location.name):[];
        citiesList.push(body.location.name);
        localStorage.setItem('weatherBoxCity', JSON.stringify(citiesList));
        dispatch(addCity(body));
    }
}

const addCity = (city) =>({
    type: types.weatherBoxAdd,
    payload: city
});

export const startRemoveCity = (city) =>{
    return (dispatch) =>{
        const serializedData = localStorage.getItem('weatherBoxCity');
        const listCities = JSON.parse(serializedData);
        const cities = listCities.filter(e =>e !== city);
        localStorage.setItem('weatherBoxCity', JSON.stringify(cities));
        dispatch(removeCity(city));
    }
}

const removeCity = (city) =>({
    type: types.weatherBoxRemove,
    payload: city
})

export const startUpdateSettings = (settings) =>{
    return (dispatch) =>{
        localStorage.setItem('weatherBoxSettings', JSON.stringify(settings));
        dispatch(updateSettings(settings));
    }
}

const updateSettings = (settings) => ({
    type: types.weatherBoxSettingsUpdate,
    payload: settings
})
 
