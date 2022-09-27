import React from "react";
import "./modal.css";
import { useState } from "react";
import { Comentarios } from "./Comentarios";

export const Modal = ({ subreddit, id }) => {
  const [comentarios, setComentarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState("");

  /*   const getCommments = (subreddit, id) => {
    fetch(`http://api.reddit.com/r/${subreddit}/comments/${id}`)
      .then((response) => response.json())
      .then((json) => {
        json[1].data.children.map((el) => {
         let comment = {
            body: el.data.body,
          };

         let coments = [...comentarios.comments, comment]
          setComentarios({coments})
          console.log(comentarios)
        });
      });
  };
 */

  const getCommments = (subreddit, id) => {
    const getApi = async (url) => {
      setComentarios([]);
      setLoading(true);
      let res = await fetch(url);
      let json = await res.json();
      console.log(json);

      json[1].data.children.forEach(async (el) => {
        let posteo = await {};

        posteo = await {
          body: el.data.body,
          author: el.data.author,
        };
        
        setComentarios((posteos) => [...posteos, posteo]);
        setLoading(false);
      });
    };

    getApi(`http://api.reddit.com/r/${subreddit}/comments/${id}`);
  };

  return (
    <>
      <button
        className="boton"
        onClick={() => {
          getCommments(subreddit, id);
          setModal("active");
          console.log(comentarios);
        }}
      >
        Ver comentarios
      </button>

      <div id="ventanaModal" className={`modal ${modal}`}>
        <div className="contenido-modal">
          <p
            className="close"
            onClick={() => {
              setModal("");
            }}
          >
            &times;
          </p>
          {loading ? (
            <p>Cargando</p>
          ) : (
            comentarios.map((el, i) => (
              <Comentarios
                comentarios={comentarios}
                key={i}
                author={el.author}
                body={el.body}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};
