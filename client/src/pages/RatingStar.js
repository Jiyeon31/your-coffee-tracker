import ReactStars from 'react-stars'
import React from 'react'
import { render } from 'react-dom'

const ratingChanged = (newRating) => {
  console.log(newRating)
}

const RatingStar = () => {
render(
<div>
    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    color2={'#ffd700'} />
</div>,
  document.getElementById('root')
)};

export default RatingStar;
