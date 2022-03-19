import "./App.css";
import { useState } from "react";
import { Tweet, ListOfTweets, AddTweet } from "./components";
import { tweet_db } from "./db";

function App() {
  const [tweets, setTweets] = useState(tweet_db);
  return (
    <div className="container">
      <AddTweet setTweets={setTweets} />
      <ListOfTweets tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;
