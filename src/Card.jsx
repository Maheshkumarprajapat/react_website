import React from 'react'
import {NavLink} from 'react-router-dom'

const Card = (props) => {
    return (
        <div className="col-md-4 d-flex">
            <div className="card">
               <div className="img-wrap">
               <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc}/>
               </div>
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                </div>
                <div className="btn-wrap">
                        <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Card
