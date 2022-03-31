import { useState } from "react";
import { v4 } from "uuid";
import axios from "axios";
import Avatar from "../../assets/avatar.jpg";
import "./AddTweet.css";

// add tweets is for getting new tweets when adding a new one
export function AddTweet({ getTweets }) {
  const [tweetInput, setTweetInput] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // data to send in the request body
    const data = {
      content: tweetInput,
    };
    // url of the endpoint for tweets
    const url = `${process.env.REACT_APP_BACKEND_URL}/tweets`;
    // reqest configuration for adding a header with authorization
    const config = {
      headers: {
        // read token from local storage and send it with request
        authorization: localStorage.getItem("token"),
      },
    };
    // make a request with axios
    const tweet = await axios.post(url, data, config);
    // get tweets from the backend 
    getTweets();
  };
  return (
    <form onSubmit={handleSubmit} className="tweet">
      <img
        width={32}
        height={32}
        className="tweet__img"
        src={Avatar}
        alt="avatar_image"
      />
      <div className="tweet__input">
        <textarea
          value={tweetInput}
          onChange={(event) => setTweetInput(event.target.value)}
        />
        <button type="submit">Tweet</button>
      </div>
    </form>
  );
}
