import React from "react";
import ReactDOM, { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { firebase, firebaseConfig } from './Firebase/firebase';
import history from '../src/services/history';
import { startAddTask } from "./redux/TaskForm/action";
import {FirebaseAppProvider} from "reactfire"

const jsx = (
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </FirebaseAppProvider>
);
let hasRendered = false;
const renderApp = () => {
  // if (!hasRendered) {
  ReactDOM.render(jsx, document.getElementById("root"));
  //hasRendered = !hasRendered;
  // }
};

ReactDOM.render(jsx, document.getElementById("root"));



// firebase.auth().onAuthStateChanged((user) => {
//   console.log(user)
//   if (user) {
//     console.log('log in');
//     if (history.location.pathname === '/') {
//       history.push("/")
//       // window.location.reload()
//       // console.log(hasRendered)
//       // renderApp();
//         // console.log(history);
//       }
//   } else {
//     history.push("/");
//       // window.location.reload()
//   }
// });


/*
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    renderApp();
    history.push('/');
  }
});
*/

/*
export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];

      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setExpenses(expenses));
    });
  };
  */