/* eslint-disable */ 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import coinsReducer, {fetchWeather} from './weather/weather'
import pollutionReducer from './pollution/pollution'


const reducer = combineReducers({
    coins: coinsReducer,
    pollutionData: pollutionReducer
});

const elemStore = createStore(reducer, applyMiddleware(thunk, logger));
// elemStore.dispatch(fetchWeather());


export default elemStore;
