import React from 'react';

function DisplayArticles(props) {
  // console.log("i am coming from display articles", props.data.data)



  let renderArticles = () => {
    if(props.loading) {
      let results = props.data.data;
      console.log("tryna render these articles though => ",results);
      return results.query.search.map(article => ( 
      <div key={article.timestamps}>
        <h4> {article.title} </h4>
        <span dangerouslySetInnerHTML={{__html: article.snippet }}></span>
      {/* <p> {article.snippet} </p> */}
      </div>
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
