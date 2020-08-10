import React, { Component } from 'react';
import SearchBar from './SearchBar';
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

  getAllArticles = async(event) => {
    try {
      const res = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${this.state.searchQuery}&prop=info&inprop=url&utf8=&format=json`)
      
      this.setState({data: res, loading:true})
      return res;

    } catch (e) {
      window.alert(e);
      console.log("~~~~ ⚠ api call error ⚠ ", e)
    }
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar />
      </React.Fragment>
    )
  }
}
