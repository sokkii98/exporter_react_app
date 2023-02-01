import React, { Component } from 'react'
import Footer from '../HomePage/Footer'
import Header from '../HomePage/Header'
import Post from './Post'
import Postcontent from './Post_content'

export default class PostPage extends Component {
  render() {
    return (
        <>
        <Header/>
        <Post/>
        <Postcontent />
        <Footer/>
        </>
    )
  }
}
