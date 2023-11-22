import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import PrintDetails from '../components/PrintDetails';
import store from '../redux/configureStore';

test('matches voice search component snapshot', () => {
  const coin = {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    current_price: 44260,
    market_cap: 840513708212,
    total_volume: 26316282020,
    high_24h: 44999,
    low_24h: 43721,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 69045,
    ath_date: '2021-11-10T14:24:11.849Z',
    atl: 67.81,
    atl_date: '2013-07-06T00:00:00.000Z',
    last_updated: '2022-03-25T17:43:30.692Z',
  };

  const tree = renderer.create(
    <Provider store={store}>
      <PrintDetails data={coin} />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
