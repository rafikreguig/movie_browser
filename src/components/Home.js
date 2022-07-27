import React from 'react';
import Hero from './Hero';
import Film from '../imgs/Film.svg'

export default function Home() {
    return(
       <div>
       <Hero text="Welcome!" />
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 mt-4">
                    <p className="fs-5 text-center py-1">
                      <span className="fw-bold">Movie Browser</span> is an online database of information related to films,
                      explore a different informations about your favorite movies.
                    </p>
                </div>
                <div className="posters--con col-lg-8 mx-auto">
                  <img src={Film} className="img-fluid film-img" alt="film-roll" />
                </div>
            </div>
        </div>
       </div> 
    )
}
