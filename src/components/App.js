import { Provider } from 'react-redux';

import Form from './Form';
import store from '../store/store';

import '../styles/app.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Form />
      </div>
    </Provider>
  );
};

export default App;
