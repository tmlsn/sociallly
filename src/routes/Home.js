import axios from "axios";
import { useEffect, useState } from "react";
import { AddTweet, ListOfTweets } from "../components";

export function Home() {
  const [tweets, setTweets] = useState([]);

  // function to get tweets from the backend, this was moved from inside useEffect
  const getTweets = async () => {
    // endpoint for getting tweets from the backend
    const url = `${process.env.REACT_APP_BACKEND_URL}/tweets`;
    // request config that is gonna hold the authorization
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    // make the request
    const result = await axios.get(url, config);
    setTweets(result.data);
  };

  // always useEffect when doing an API call
  useEffect(() => {
    getTweets();
  }, []);

  return (
    <div className="container">
      <AddTweet getTweets={getTweets} />
      <ListOfTweets tweets={tweets} />
    </div>
  );
}
