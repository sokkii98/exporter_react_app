import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Hero from './components/hero';
import Main from './components/main';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';




function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" component={Header} />
          <Route path="/" component={Hero} />
          <Route path="/" component={Main} />
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
