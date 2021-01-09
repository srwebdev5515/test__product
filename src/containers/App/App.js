import React from 'react';
import Header from '../../containers/Header';
import Footer from '../../containers/Footer';
import Content from '../../containers/Content';

import 'pure-react-carousel/dist/react-carousel.es.css';
import './styles.scss';

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  )
}

export default App;
