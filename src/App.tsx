import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import AppNavigator from '../src/navigation/Application';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;