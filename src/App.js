import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import LoginNew from './pages/LoginNew';
import Main from './pages/Main';
import DataReview from './pages/DataReview';
import Notfound from './pages/NotFound';


function App() {
  return (
    <BrowserRouter>
      <Switch>  
        <Route exact path='/' component={LoginNew}/>
        <Layout>
        <Route exact path='/Main' component={Main}/>
        <Route exact path='/DataReview' component={DataReview}/>
        <Route component={Notfound}/>
        </Layout>
      </Switch>    
    </BrowserRouter>
  );
}

export default App;
