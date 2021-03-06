import React, { Component } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import DisplayArticles from './DisplayArticles';


export default class GetArticles extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: [],
      loading: false,
      searchQuery: '',
      articlesList:[]
    }
  }

  getAllArticles = async(event) => {
    event.preventDefault();
    
    try {
      const res = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${this.state.searchQuery}&prop=info&inprop=url&utf8=&format=json`)
      
      this.setState({data: res, loading:true})
      return res;

    } catch (e) {
      window.alert(e);
      // console.log("~~~~ ⚠ api call error ⚠ ", e)
    }
  }

  onSearchChange = (e) => {
    this.setState({searchQuery: e.target.value})
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar 
          searchQuery={this.state.searchQuery}
          onSearchChange={this.onSearchChange}
          getAllArticles={this.getAllArticles}
        />

        <DisplayArticles
          data={this.state.data}
          loading={this.state.loading}
        />
      </React.Fragment>
    )
  }
}
