import React from 'react';
import RatedList from '../components/RatedList';

import {useQuery} from '@apollo/client';
import {QUERY_USER} from '../utils/queries';
import Auth from '../utils/auth';




const Profile = (props) => {
  //get userName
const currentUrl = window.location.href;
const urlUser = currentUrl.split("=")[1];
  const userName = urlUser

  const { loading, data } =  useQuery(QUERY_USER, {
    variables: { userName: urlUser },
  });

  console.log(data?.user.products);
  //console.log(data.products[0])
 
  const ratedProducts = data?.user.products;
  

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
          userName={userName}
          ratedProducts={ratedProducts}
        />
        That's All They've Reviewed!
      </div>
      
  </div>
  );
};

export default Profile;
