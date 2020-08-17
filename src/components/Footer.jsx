import React from 'react';
import '../styles/Footer.css';
import { MDBFooter } from "mdbreact";

function Footer() {
  return (
    <MDBFooter style={{color: "blue", marginTop: "110%"}} >
      <span> © </span> <span> Itzamna Huerta </span>
    </MDBFooter>

  )
}

export default Footer
