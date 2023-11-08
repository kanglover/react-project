import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit'
import rootSaga from './sagas'

import './index.css';
import App from './App';
import rootReducer from './slices';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
})
sagaMiddleware.run(rootSaga);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
