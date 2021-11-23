import './App.css'
import React,{useEffect} from "react";
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import {BrowserRouter as Router,Routes,Route} 
from "react-router-dom"
import Login from './Login'
import Services from './Services';
import Payment from './Payment'
import {auth} from './firebase'
import { useStateValue } from './StateProvider';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51JyM42SAqhfStg9qXVCzHF7oDTqcKvsyMXV2eLQThBngfd4cOcLKfquiOrbK67BY8sYywtXyLeQ4bmqQ6vZJ6SxT00iGtgAypp");

function App() {
  const [{},dispatch]=useStateValue();
  useEffect(()=>{
    //will only run once the app component loads

    auth.onAuthStateChanged(authUser =>{
      console.log('The user is >>>',authUser);
      if(authUser)
      {
        //the user just logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else{
        //user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])
  return (
    //BEM
    <Router>
      <div className="app">
      <Routes>
         <Route exact path="/login"
           element={
           <Login/>
           }/>

          <Route exact path="/"
           element={
             <>
            <Header/>
            <Home />
            </>
           }/>

          <Route exact path="/checkout" element={
          <>
          <Header/>
          <Checkout/>
          </>
        }/>
        <Route
        exact path="/payment"
        element={
        <>
        <Header/>
        <Elements stripe={promise}>
          <Payment/>
        </Elements>
        
        </>
        }
        />
        <Route exact path="/services"
           element={
             <>
            <Header/>
            <Services />
            </>
           }/>
          
        </Routes>
    </div>
    </Router>
    
  );
}

export default App;
