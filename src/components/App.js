import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Lists from '../stubs/Lists';
import store from '../store/store';

import '../styles/app.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/stubs/lists" component={Lists} />
        </Switch>
      </Router>
      {/* <div className="app">
        <Form />
      </div> */}
    </Provider>
  );
};

export default App;
