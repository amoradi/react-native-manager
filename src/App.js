import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Router from './Router';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDjzdmeZWrwGIFn2qddrPtOP0Iu5v-JeAk",
      authDomain: "managers-special.firebaseapp.com",
      databaseURL: "https://managers-special.firebaseio.com",
      projectId: "managers-special",
      storageBucket: "managers-special.appspot.com",
      messagingSenderId: "475722939321"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
