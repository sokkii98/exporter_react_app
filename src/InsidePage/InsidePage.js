import React, { Component } from 'react'
import Header from '../HomePage/Header'
import Inside from '../InsidePage/Inside'
import Footer from '../HomePage/Footer'

export default class PostPage extends Component {
  render() {
    return (
        <>
        <Header/>
        <Inside/>
        <Footer/>
        </>
    )
  }
}