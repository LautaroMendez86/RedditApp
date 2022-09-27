import React from 'react'
import './comentarios.css'

export const Comentarios = (props) => {
  return (
    <div className='comentarios'>
        <h4>{props.author}</h4>
        <h5>{props.body}</h5>
    </div>
  )
}
