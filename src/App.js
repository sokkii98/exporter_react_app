import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Main from './components/Main';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Modal from './components/Modal';




function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" component={Header} />
          <Route path="/" component={Hero} />
          <Route path="/" component={Main} />
          <Route path="/" component={Modal} />
          <Route path="/" component={Footer} />

        </Routes>
        <Hero/>
        <Main/>
        <Footer />
      </Router>

    </>

  );
}

export default App;
