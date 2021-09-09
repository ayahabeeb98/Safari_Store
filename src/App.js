import './App.less';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {RouteWrapper} from './routes/RouteWrapper';
import Home from './pages/home';

import BaseLayout from "./layouts/BaseLayout";
import Registration from './pages/registaration';
import { useStateValue } from './firebase';
import { auth } from './firebase/firebase';
import { useEffect,useState } from 'react';
import React from 'react'


function App() {
  const {dispatch}= useStateValue();
    

  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log("the user is >>>>", authUser);
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser,
        })
      }else{
        dispatch({
          typeof:'SET_USER',
          user:null,
        })
      }
    })
    
  }, [])
  return (
    <Router>
      <Switch>
            <RouteWrapper path="/" exact component={Home} layout={BaseLayout}/>
            <RouteWrapper path="/register" exact component={Registration} layout={BaseLayout}/>
        </Switch>
      </Router>
     
  );
}

export default App;
