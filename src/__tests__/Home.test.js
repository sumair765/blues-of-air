import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Home from '../components/pages/Home';
import store from '../redux/configureStore';

test('matches home component snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Home />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
