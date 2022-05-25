import { Provider } from 'react-redux';
import './App.css';
import Entre from './components/Enter';
import store from './store/store';
import React from 'react';
import logo from './logo.svg';
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react-v1';

function App() {
  return (
    <div>
          {/* < */}
        <div className="App">
        {/* <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>We now have Auth!</h1>
        </header> */}
          <Provider store={store}>
            <div className="App">
              <Entre />
            </div>
          </Provider>
        <AmplifySignOut />
      </div>
    </div>
  );
}

export default withAuthenticator(App);