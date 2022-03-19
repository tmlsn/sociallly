import "./App.css";
import { Tweet, ListOfTweets } from "./components";

const tweet_db = [
  { id: "1", content: "content1" },
  { id: "2", content: "content2" },
  { id: "3", content: "content3" },
];

function App() {
  return (
    <div>
      <Tweet />
    </div>
  );
}

export default App;
