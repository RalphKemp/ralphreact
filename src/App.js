import React, { Component } from 'react';
import CardsList from './components/CardsList';
import Header from './components/Header';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <CardsList />
      </div>
    );
  }
}

export default App;