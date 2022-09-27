import { Modal } from "./Modal";
import "./Card.css";


export const Card = (props) => {

  return (
    <>
      <div className="cards">
        <div className="grid">

        <p className="parrafo">
            {props.author} | {props.subreddit}
          </p>
          <h2 className="title">{props.title}</h2>
          <p className="parrafo">{props.selftext}</p>
          {props.url.includes(".jpg") && (
            <a href={props.url} target={"_blank"}>
              <img src={props.url} className="img" alt={props.author} />
            </a>
          )}
          {props.url.includes(".png") && (
            <a href={props.url} target={"_blank"}>
              <img src={props.url} className="img" alt={props.author} />
            </a>
          )}
          {props.url.includes(".gif") && (
            <a href={props.url} target={"_blank"}>
              <img src={props.url} className="img" alt={props.author} />
            </a>
          )}
          {props.media.includes(".mp4") && (
              <video
                src={props.media}
                controls
                typeof="video/mp4"
                className="img"
                alt={props.author}
              />
          )}

          <p className="puntos">Points: {props.score}</p>
          
          <Modal subreddit={props.subreddit} id={props.id}/>
        </div>
      </div>
    </>
  );
};
