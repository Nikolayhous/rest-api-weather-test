import axios from 'axios';

const API_KEY = 'be7702e6c49507a84b446191f942796c';
axios.defaults.baseURL = 'http://api.openweathermap.org';

async function getWeatherAPI(searchQuery) {
    try {
        let result = [];
        const { data } = await axios.get(
            `/data/2.5/weather?q=${searchQuery}&units=metric&appid=${API_KEY}`,
        );

        result.push(data);

        return result;
    } catch (error) {
        console.log(error.message);
    }
}

export default getWeatherAPI;
