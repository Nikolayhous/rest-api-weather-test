import { useDispatch } from 'react-redux';
import getCurrentWether from '../../redux/weather/operations';

const List = () => {
    const dispatch = useDispatch();

    const weatherCountry = dispatch(getCurrentWether());

    console.log(weatherCountry);
    return <></>;
};

export default List;
