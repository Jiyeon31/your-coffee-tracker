import React from 'react';
import { Link } from 'react-router-dom';

const FollowList = ({ followCount, username, follows }) => {
  if (!follows || !follows.length) {
    return <p className="bg-dark text-light p-3">{username}, make some follows!</p>;
  }

  return (
    <div>
      <h5>
        {username}'s {followCount} {followCount === 1 ? 'follow' : 'follows'}
      </h5>
      {follows.map(follow => (
        <button className="btn w-100 display-block mb-2" key={follow._id}>
          <Link to={`/profile/${follow.username}`}>{follow.username}</Link>
        </button>
      ))}
    </div>
  );
};

export default FollowList;
