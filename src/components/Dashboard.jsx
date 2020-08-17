import React from 'react'
import GetArticles from './GetArticles';
import Footer from './Footer';

function Dashboard() {
  return (
    <div>
      <div className="App">
      <header> 
        <h1> WIKISNIPPET</h1>
      </header>
      <GetArticles />
      <Footer />
    </div>
    </div>
  )
}

export default Dashboard
