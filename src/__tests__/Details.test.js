import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import CoinDetails from '../components/pages/CoinDetails';
import store from '../redux/configureStore';

test('matches details component snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <CoinDetails />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
