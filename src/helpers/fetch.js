const baseUrl = process.env.REACT_APP_API_URL;
const apikey = process.env.REACT_APP_API_KEY;

export const fetchGeo = ( endpoint, filter) =>{
    const url = `${baseUrl}${endpoint}?key=${apikey}&q=${filter}`;
    return fetch(url);
}