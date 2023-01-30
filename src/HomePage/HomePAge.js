import React, { Component } from 'react'
import Header from './Header'
import Hero from './Hero'
import Content from './Content'
import Footer from './Footer'


export default class HomePAge extends Component {
  render() {
    return (
      <>
      <Header/>
      <Hero/>
      <Content/>
      <Footer/>
      </>
    )
  }
}
