import React, { useState, useEffect } from 'react';


const LikeButton = ({}) => {
  
  const [like, setLike] = useState(0),
    [isLike, setIsLike] = useState(false),
    onLikeButtonClick = () => {
      setLike(like + 1);
      setIsLike(!isLike);
    };

    
  return (
    <>
      <button
        className={"like-button " + (isLike ? "liked" : "")}
        onClick={onLikeButtonClick}
      >
        {"Like"} | {like}
      </button>
      <style>{`
        .like-button {
            font-size: 1rem;
            padding: 5px 10px;
            color: #1565c0;
        }
      `}</style>
    </>
  );
};

export default LikeButton;
