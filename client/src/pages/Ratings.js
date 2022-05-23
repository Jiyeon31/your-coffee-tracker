import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import { Rating, AirbnbRating } from 'react-native-ratings'; //5.3.0

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.tite}>
          React Native Ratings
        </Text>
        
        <Text style={styles.paragraph}>
          Airbnb-style ratings
        </Text>
        <AirbnbRating />
        <AirbnbRating
          count={11}
          reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
          defaultRating={11}
          size={20}
        />
        
        <Text style={styles.paragraph}>
          Ratings
        </Text>
        <Rating
          showRating
          imageSize={40}
          onFinishRating={this.ratingCompleted}
          style={{ paddingVertical: 10 }}
        />
        <Rating
          type='heart'
          ratingCount={3}
          imageSize={40}
          showRating
          onFinishRating={this.ratingCompleted}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  tite: {
    fontSize: 24,
    textAlign: 'center',
    color: '#34495e'
  },
  paragraph: {
    margin: 10,
    marginTop: 40,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});