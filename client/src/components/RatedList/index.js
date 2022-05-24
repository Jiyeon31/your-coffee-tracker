import React from 'react';
import { Link } from 'react-router-dom';
import RatedList from '../components/RatedList'




const RatedList = ({ ratedProductCount, username, ratedProducts }) => {
  if (!ratedProducts || !ratedProductCount.length) {
    return <p className="bg-dark text-light p-3">{username}, rate some products!</p>;
  }

  return (
  //  <div>
   //   <h5>
      //  {username}'s {friendCount} {friendCount === 1 ? 'friend' : 'friends'}
     // </h5>
     // {friends.map(friend => (
       // <button className="btn w-100 display-block mb-2" key={friend._id}>
          //<Link to={`/profile/${friend.username}`}>{friend.username}</Link>
       // </button>
      //))}
   // </div>

   <div>
       Nothing to See Here
   </div>
  );
};

export default FriendList;