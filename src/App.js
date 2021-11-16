import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import styled from 'styled-components';
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Spinner from 'react-spinkit';

// Components
import Main from './components/Main';

// Messenger
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {

  const [user,loading] = useAuthState(auth);

  if(loading){
    return (
      <AppLoading>
        <AppLoadingContents>
        <img src='./images/aboutbg.png' alt="Ranch PC Logo" />
        <Spinner 
          name="ball-spin-fade-loader"
          color="#07051B"
          fadeIn="none"
        />
        </AppLoadingContents>
      </AppLoading>
    )
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Main />
        ):(
        <>
          <AppBody>
          <Switch>
            <Route path="/" exact>
            </Route>
          </Switch>
          </AppBody>
        </>
        )}
      </Router>
      {/* Messenger API */}
      <MessengerCustomerChat
        pageId="102220941569609"
        appId="925495151698638"
      />
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;
