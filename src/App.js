import React from 'react';
import logo from './logo.svg';

import Card from './components/Card';

import './App.css';

function App() {
  return (
    <div className="App">
      <Card name="This is a card showing of a String" likes="3"></Card>
      <Card name="This is card 2!"></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
}

export default App;
