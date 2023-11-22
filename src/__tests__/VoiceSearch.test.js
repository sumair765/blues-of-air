import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import VoiceSearch from '../components/pages/VoiceSearch';
import store from '../redux/configureStore';

test('matches voice search component snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <VoiceSearch />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
