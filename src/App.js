import React from 'react';
import './App.css';
import GetArticles from './components/GetArticles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header> 
        <h1> WIKISNIPPET</h1>
      </header>
      <GetArticles />

    </div>
  );
}

export default App;
