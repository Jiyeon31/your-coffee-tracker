import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_RATED_PRODUCT, ADD_REVIEW } from '../../utils/mutations';

const ReviewForm = ({ productId, name, image }) => {
  const [reviewBody, setBody] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const[addRatedProduct] = useMutation(ADD_RATED_PRODUCT);
  const [addReview, { error }] = useMutation(ADD_REVIEW);
  
  console.log ("FINDM EMEMEMEMEM")
    console.log (name)
    console.log(image)
 

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    
    event.preventDefault();


    
    try {
      await addReview({
        variables: { reviewBody, productId },
        
      });

      await addRatedProduct({
        variables: {id: productId}
        
      });

      window.location.reload()
      

      await 

      // clear form value
      setBody('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className=''>
      <p
        className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Leave a review to this product..."
          value={reviewBody}
          className="form-input col-12 col-md-9 borderred" rows="5"
          cols="100"
          onChange={handleChange}
        ></textarea>

        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>

      {error && <div>Something went wrong...Perhaps you aren't logged in or already reviewed this item?</div>}
      
    </div>
  );
};

export default ReviewForm;
