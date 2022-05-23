import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';
import FavoriteList from './FavoriteList';

import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = (props) => {
  const { userName: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { userName: userParam },
  });

  const user = data?.me || data?.user || {};

  // redirect to personal profile page if firstName is yours
  if (Auth.loggedIn() && Auth.getProfile().data.userName === userParam) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.userName) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {userParam ? `${user.userName}'s` : 'your'} profile.
        </h2>
      </div>
      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
          <FavoriteList/>
        </div>
      </div>
      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
          <ReviewList
            reviews={user.reviews}
            title={`${user.userName}'s reviews...`}
          />
        </div>
      </div>
      <div className="mb-3">{!userParam && <ReviewForm />}</div>
    </div>
  );
};

export default Profile;
