import React from 'react';

function DisplayArticles(props) {
  // console.log("i am coming from display articles", props.data.data)



  let renderArticles = () => {
    if(props.loading) {
      let results = props.data.data;
      return results.query.search.map(a => <p> {a.title} </p>)

      // console.log("tryna render these articles though => ",results.query.search)
      // props.data.data.map()
    } 
  }

  return (
    <div>
      <p> I display Articles</p>
      {renderArticles()}
    </div>
  )
}

export default DisplayArticles
