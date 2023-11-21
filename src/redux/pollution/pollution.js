import axios from 'axios';

const GET_DATA = 'crypto-overview/detailsReducer/GET_DATA';
const REMOVE_DATA = 'crypto-overview/detailsReducer/REMOVE_DATA';
const initialState = {};

export const getDetails = (payload) => ({
  type: GET_DATA,
  payload,
});

export const getDetailsFromApi = (coin) => async (dispatch) => {
  const details = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin.coinId}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
  dispatch(getDetails(details.data));
};

export const removeDetailsData = () => ({
  type: REMOVE_DATA,
  payload: {},
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    case REMOVE_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
