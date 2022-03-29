import "./App.css";
import { useState } from "react";
import { Tweet, ListOfTweets, AddTweet, Profile } from "./components";
import { tweet_db } from "./db";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [tweets, setTweets] = useState(tweet_db);
  return (
    <Routes>
    <Route path="/" element={<Navigate to='/home'/>}/>
    <Route path='/home' element={
      <div className="container">
      <AddTweet setTweets={setTweets} />
      <ListOfTweets tweets={tweets} setTweets={setTweets} />
    </div>
    } />

    <Route path="/profile" element={
      <Profile/>
    } />
    
    </Routes>
  );
}

export default App;
