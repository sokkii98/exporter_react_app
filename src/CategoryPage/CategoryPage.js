import React, { Component } from 'react'
import Header from '../HomePage/Header'

import Footer from '../HomePage/Footer'
import Category from './Category'

export default class CategoryPage extends Component {
  render() {
    return (
        <>
        <Header/>
        <Category/>
        <Footer/>
        </>
    )
  }
}
