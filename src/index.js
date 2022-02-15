import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { WeatherCityBox } from './WeatherCityBox';
import { store } from './commons/store';


ReactDOM.render(
  <Provider store={store}>
    <WeatherCityBox />
  </Provider>,
  document.getElementById('root')
);


