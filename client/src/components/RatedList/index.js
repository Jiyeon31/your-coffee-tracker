import React from 'react';
import ProductItem from '../ProductItem';




const RatedList = ({ratedProducts }) => {

  console.log (ratedProducts)
 


  if (1 > 0) {
    
    return (
    <div>
        {ratedProducts.map(ratedProduct => (
          <ProductItem
              key={ratedProduct._id}
              _id={ratedProduct._id}
              image={ratedProduct.image}
              name={ratedProduct.name}
              className="products"
            />
        
      ))}

        
  
    </div>
    )
  }
  
 
      
  
};

export default RatedList;