import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Footer from './components/Footer';
import Review from './components/Review';
import ReviewList from './components/ReviewList';
import ReviewEdit from './components/ReviewEdit';

import Home from './pages/Home';
import Login from './pages/Login';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import SingleReview from './pages/SingleReview';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import { StoreProvider } from './utils/GlobalState';

const httpLink = createHttpLink({
  uri: 'http://192.168.1.187/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <StoreProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/reviewlist" component={ReviewList} />
              <Route path="/edit/:id" component={ReviewEdit} />
              <Route path="/review" component={Review} />
              <Route path="/profile/:username?" component={Profile} />
              <Route path="/review/:id" component={SingleReview} />
              <Route path="/products/:id" component={Detail} />
              <Route component={NoMatch} />
            </Switch>
            </StoreProvider>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
