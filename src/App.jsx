import React, { Component } from 'react';
import DeckBuilder from './pages/DeckBuilder';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Play with your friend using our shuffled cards from our deck </h1>
          <button type="submit">Start</button>
        </div>
      </div>
    );
  }
}
