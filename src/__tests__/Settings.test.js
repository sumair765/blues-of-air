import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Settings from '../components/pages/Settings';
import store from '../redux/configureStore';

test('matches settings component snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Settings />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
