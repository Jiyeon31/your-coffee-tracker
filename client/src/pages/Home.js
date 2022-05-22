import React from 'react';
import ReviewList from '../components/ReviewList';
import Review from '../components/Review';
import FollowList from '../components/FollowList';
import ProductList from '../components/ProductList';
import CategoryMenu from "../components/CategoryMenu";

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_REVIEWS, QUERY_ME_BASIC } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_REVIEWS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const reviews = data?.reviews || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <CategoryMenu />
      <ProductList />
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <Review />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ReviewList
              reviews={reviews}
              title="Some Feed for Review(s)..."
            />
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <FollowList
              username={userData.me.username}
              followCount={userData.me.followCount}
              follows={userData.me.follows}
            />
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Home;
