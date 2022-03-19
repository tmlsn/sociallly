import Avatar from "../../assets/avatar.jpg";
import "./Tweet.css";

export function Tweet({ content }) {
  return (
    <div className="tweet">
      <img
        width={32}
        height={32}
        className="tweet__img"
        src={Avatar}
        alt="avatar_image"
      />
      <div className="tweet__input">
        <p>{content}</p>
        <div className="tweet__actions">
          <button>Edit</button>
          <button>Delete</button>
          <button>Read more</button>
        </div>
      </div>
    </div>
  );
}
