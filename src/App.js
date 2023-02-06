import React, { Component } from 'react'

import { Route, HashRouter as Router, Routes } from "react-router-dom";
import HomePAge from './HomePage/HomePAge';
import PostPage from './PostPage/PostPage';
import CategoryPage from './CategoryPage/CategoryPage';
import InsidePage from './InsidePage/InsidePage'

export default class App extends Component {
  render() {
    return (
      <Router>
      <Routes>
        <Route path='/' element={<HomePAge />} />
        <Route path='post' element={<PostPage />} />
        <Route path='category' element={<CategoryPage />} />
        <Route path='inside' element={<InsidePage />} />




 

      </Routes>
    </Router>
    )
  }
}
