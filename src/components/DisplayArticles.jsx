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
        <MDBCard style={{ width: "22rem", margin:'1em' }}>
          <MDBCardBody>
            <MDBCardTitle> 
            <a 
            href={ `https://en.wikipedia.org/wiki/${article.title.replace(regex, "_")}`}>  
            {article.title}
            </a>
            </MDBCardTitle>
            <MDBCardText>
            <span dangerouslySetInnerHTML={{__html: article.snippet }}></span>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>


      // <div key={article.timestamps}>
      //   <h4>
      //     <a 
      //       href={ `https://en.wikipedia.org/wiki/${article.title.replace(regex, "_")}`}>  
      //     {article.title}
      //     </a>
      //   </h4>
      //   <span dangerouslySetInnerHTML={{__html: article.snippet }}></span>
      // </div>
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
