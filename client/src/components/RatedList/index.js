import React from 'react';
import { Link } from 'react-router-dom';




const RatedList = ({ ratedProductCount, ratedProducts }) => {
  if (ratedProductCount > 0) {
    
    return (
    <div>
        {ratedProducts.map(ratedProduct => (
        <button className="btn w-100 display-block mb-2" key={ratedProduct._id}>
          <Link to={`/products/${ratedProduct._id}`}>{ratedProduct._id}</Link>
        </button>
      ))}

        ))
  
    </div>
    )
  }
  console.log(ratedProductCount + 1)
 
      
  
};

export default RatedList;