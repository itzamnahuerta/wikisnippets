import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';


function DisplayArticles(props) {
  // console.log("i am coming from display articles", props.data.data)

  let renderArticles = () => {
    let regex = / /g;

    if(props.loading) {
      let results = props.data.data;
      // console.log("tryna render these articles though => ",results);
      return results.query.search.map(article => ( 
        <MDBCol>
        <MDBCard style={{ width: "22rem", margin:'1em' , backgroundColor: '#353FF2'}}>
          <MDBCardBody>
            <MDBCardTitle> 
            <a 
            style={{color: '#C09CD9'}}
            href={ `https://en.wikipedia.org/wiki/${article.title.replace(regex, "_")}`}>  
            {article.title}
            </a>
            </MDBCardTitle>
            <MDBCardText>
            <span style={{color: '#D9CC1E'}} dangerouslySetInnerHTML={{__html: article.snippet }}></span>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      )
      );
    } 
  }

  return (
    <div>
      {renderArticles()}
    </div>
  )
}

export default DisplayArticles
