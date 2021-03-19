import { Provider } from 'react-redux';
import MyComponent from './components/MyComponent';
import generateStore from './redux/store';

function App() {

  const store = generateStore();

  return (
    <Provider store={store}>
      <MyComponent />
    </Provider>
  );
}

export default App;
