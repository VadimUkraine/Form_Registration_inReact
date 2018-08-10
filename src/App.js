import React, { Component } from 'react';
import './style.scss';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
