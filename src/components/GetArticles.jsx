import React, { Component } from 'react';
import '../styles/GetArticles.css';
import axios from 'axios';


export default class GetArticles extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: [],
      loading: false,
      searchQuery: '',
      articlesList:null
    }
  }
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
