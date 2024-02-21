import React from 'react'

const Card = (props) => {
  return (
    <div className="card" style={{width: "18rem"}}>
  <img src={props.image} className="card-img-top" alt="..."  style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <div>
    <span className="border border-light">
      <p className="card-text" >{props.text}</p>
      </span>
    </div>
    <a href="#" className="btn btn-primary b">Aprende más!!</a>
  </div>
</div>
  )
}


export default Card