// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5/weather';

// const getCurrentWether = createAsyncThunk(
//     'weather/fetch',
//     async (_, { rejectWidthValue }) => {
//         try {
//             const data = await axios.get(
//                 '?q=london&units=metric&appid=be7702e6c49507a84b446191f942796c',
//             );
//             return data.data;
//         } catch (error) {
//             rejectWidthValue(error.message);
//         }
//     },
// );

// export default getCurrentWether;
