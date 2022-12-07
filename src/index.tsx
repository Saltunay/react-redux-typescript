import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reducer from './store/reducer';
import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store: Store<ArticleState, ArticleAction> & {dispatch: DispatchType} = createStore(reducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
