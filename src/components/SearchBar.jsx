import React from 'react'
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

function SearchBar(props) {
  return (
    <MDBCol md="6" >
      <MDBFormInline 
        className="md-form" 
        onSubmit={props.getAllArticles}
      >
        <MDBIcon icon="search" />
        
        <input 
          className="form-control form-control-sm ml-3 w-75" 
          type="text" 
          placeholder="Search" 
          aria-label="Search" 
          value={props.searchQuery}
          onChange={props.onSearchChange}
        />
      </MDBFormInline > 
    </MDBCol>
  )
}

export default SearchBar
