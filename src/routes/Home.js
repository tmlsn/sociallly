import axios from "axios";
import { useEffect, useState } from "react";
import { AddTweet, ListOfTweets } from "../components";

export function Home() {
  const [tweets, setTweets] = useState([]);
  // always useEffect when doing an API call
  useEffect(() => {
    // endpoint for getting tweets from the backend
    const url = `${process.env.REACT_APP_BACKEND_URL}/tweets`;
    // request config that is gonna hold the authorization
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    // make the request
    axios.get(url, config).then((result) => {
      setTweets(result.data);
    });
  }, []);

  return (
    <div className="container">
      <AddTweet setTweets={() => {}} />
      <ListOfTweets tweets={tweets} />
    </div>
  );
}
