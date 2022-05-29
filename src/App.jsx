import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DeckBuilder from './pages/DeckBuilder';
import Home from './pages/Home';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/deckbuilder" element={ <DeckBuilder /> } />
        </Routes>
      </BrowserRouter>
    );
  }
}
