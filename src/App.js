import React, { useEffect, useState } from 'react';
import firebase from './firebase'
import Routes from './routes'
import Nav from './Components/Nav'

const App = () => {
  return (
    <div>
      <Nav />
      <Routes />
    </div>
  )
}

export default App;
