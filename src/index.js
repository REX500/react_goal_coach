import React from 'react';
import ReactDOM from 'react-dom';
// components
import App from './components/App';
import SignUp from './components/SignUp';
import SingIn from './components/SingIn';
// router
import { Router, Route, browserHistory } from 'react-router';
// firebase
import { firebaseApp } from './firebase';
// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
// to save that user in props state once the login is 200
import { logUser } from './actions';

const store = createStore(reducer);

// auth logic
firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    const {email} = user;
    // save that user to props
    store.dispatch(logUser(email));
    browserHistory.push('/app');
  }
  else {
    browserHistory.replace('/signin');
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router path='/' history={browserHistory}>
      <Route path='/app' component={App} />
      <Route path='/signin' component={SingIn} />
      <Route path='/signup' component={SignUp} />
    </Router>
  </Provider>, document.getElementById('root')
)
