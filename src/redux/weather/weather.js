// Action Types
const GET_COINS = 'space-travelers/coins/GET_COINS';

//API 

const baseURL = 'https://api.openweathermap.org/data/2.5/air_pollution';

const LAT = '?lat=';

const LON = '&lon=';

const ID = '&appid=f6bac0cf26b9fff10b8405d64f730ea7';
const api_key = 'f6bac0cf26b9fff10b8405d64f730ea7'

// ACTION CREATORS

export const getCoins = (payload) => ({
  type: GET_COINS,
  payload,
});

// Fetch Coins

export const fetchPollution = (lat, lon) => async (dispatch) => {
  //http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API key}
  const url = `${baseURL}?lat=${lat}&lon=${lon}&appid=${api_key}`
  const response = await fetch(url);
  const pollution = await response.json();
  console.log('weather', pollution)

  // const coinsToDispatch = coins.map((coin) => ({
  //   id: coin.id,
  //   name: coin.name,
  //   symbol: coin.symbol,
  //   current_price: coin.current_price,
  //   market_cap: coin.market_cap,
  //   image: coin.image,
  //   total_volume: coin.total_volume,
  //   price_change_percentage: coin.price_change_percentage_24h,
  // }));

  // dispatch(getCoins(coinsToDispatch));
};

// Reducers

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_COINS:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
