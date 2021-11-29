import React from 'react';
import './App.css';
import Home from './components/Home/home';
import Search from './components/Search/search';
import View from './components/View/view';
import { Route } from 'react-router';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Route exact path='/' render={()=>(<div className='homeContainer'><Home /></div>)} /> 
        <Route path='/search' render={()=>(<Search />)} /> 
        <Route path='/view' render={()=>(<View />)} /> 
      </div>
    )
  }
}

export default App;
