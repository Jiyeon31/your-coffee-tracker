import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import RatedList from '../components/RatedList';
import FavoriteList from './FavoriteList';

import {useQuery, useMutation} from '@apollo/client';
import {QUERY_USER, QUERY_ME} from '../utils/queries';
import Auth from '../utils/auth';




const Profile = (props) => {
  //get userName
const currentUrl = window.location.href;
const urlUser = currentUrl.split("=")[1];
  const userName = urlUser

  const { loading, data } = useQuery(userName ? QUERY_USER : QUERY_ME, {
    variables: { userName: urlUser },
  });

  const user = data?.me || data?.user || {};

  //console.log(user.ratedProductCount);
  //console.log(user.userName);
  //console.log(user.ratedProducts);

  // redirect to personal profile page if firstName is yours
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Auth.loggedIn()) {
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
          Viewing {urlUser}'s profile.
        </h2>
      </div>


      <div className="col-12 col-lg-3 mb-3">
          <RatedList
            userName={user.userName}
            ratedProductCount={user.ratedProductCount}
            ratedProducts={user.ratedProducts}
          />
          That's All They've Reviewed!
        </div>
        
    </div>
  );
};

export default Profile;
