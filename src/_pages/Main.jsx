import { useEffect, useState } from 'react';
import SearchForm from '../Components/SearchForm';
import List from '../Components/ListWeather';
import Skeleton from '../Components/Skeleton';
import getWeatherAPI from '../services/getSearchWeather';
import Loader from '../Components/Loader';

const MainPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [loadingSpinner, setLoadingSpinner] = useState(false);
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        if (searchQuery === '') {
            return;
        }
        setLoadingSpinner(true);
        getWeatherAPI(searchQuery)
            .then(weather => {
                setWeather(prev => [...prev, ...weather]);
            })

            .catch(error => console.log(error.message));
    }, [searchQuery]);

    const handleFormSubmit = searchQuery => {
        setSearchQuery(searchQuery);
        setWeather([]);
    };
    console.log(weather);
    return (
        <>
            <SearchForm onSubmit={handleFormSubmit} />

            {weather.length !== 0 ? <List weather={weather} /> : <Skeleton />}

            {loadingSpinner && <Loader />}
        </>
    );
};

export default MainPage;
