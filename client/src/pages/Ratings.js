import { Rating, AirbnbRating } from 'react-native-ratings';

ratingCompleted = (rating) => {
    console.log("Rating is: " + rating)
}

function Ratings(){
    return (
        <>
        <AirbnbRating />
        <AirbnbRating
          count={11}
          reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
          defaultRating={11}
          size={20}
        />
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
        </>
    )}

 export default Ratings;
