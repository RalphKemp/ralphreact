import React, { Component } from "react";
import CardsList from "./components/CardsList";
import Header from "./components/Header";
import HttpsRedirect from 'react-https-redirect';

class App extends Component {
  render() {
    return (
      <HttpsRedirect>
        <div className="App">
          <Header />
          <CardsList />
        </div>
      </HttpsRedirect>
    );
  }
}

export default App;
