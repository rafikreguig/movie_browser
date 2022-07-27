import React from 'react';
import Hero from './Hero';

export default function About() {
    return(
       <div>
        <Hero text="About me" />
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 my-5">
                    <p>
                      <span className='fw-bold'>Hello!</span> I’m Rafik Reguig from Algeria, and I'm a self-taught Developer(Frontend Developer). 
                    </p>
                    <p>
                      I'm sharing ideas and knowledge about Web Development through social media presence on <span className='fw-bold'>Twitter</span>, feel free to reach out and say Hello.
                    </p>
                    <a href="https://twitter.com/RegRafik" className='btn btn-primary mt-4' rel="noreferrer" target="_blank">Get in Touch</a>
                </div>
            </div>
        </div>
       </div> 
    )
}

