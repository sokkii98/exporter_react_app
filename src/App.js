import React, { Component } from 'react'

import { Route, HashRouter as Router, Routes } from "react-router-dom";
import HomePAge from './HomePage/HomePAge'

export default class App extends Component {
  render() {
    return (
      <Router>
      <Routes>
        <Route path='/' element={<HomePAge />} />
 

      </Routes>
    </Router>
    )
  }
}
