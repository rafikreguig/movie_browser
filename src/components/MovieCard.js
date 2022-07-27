import React from 'react'
import { Link } from 'react-router-dom'
import noImg from '../imgs/noImg.jpg'

export default function MovieCard({ obj }) {
    const imageUrl = `https://image.tmdb.org/t/p/w500${obj.poster_path}` 
    const detailUrl = `/movie/${obj.id}`
  return (
    <div className='col-12 col-sm-6 col-md-4 col-lg-3 my-4' key={obj.id}>
      <div className="card mx-auto w-85 h-100" style={{width: "15rem"}}>
        <img src={obj.poster_path !== null ? imageUrl : noImg} className="card-img-top" alt={obj.poster_path} />
        <div className="card-body">
          <h5 className="card-title">{obj.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary mt-2">See Detailes</Link>
       </div> 
      </div>
    </div>
  )
}
