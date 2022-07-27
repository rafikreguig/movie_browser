import React from 'react';
import Hero from './Hero';
import MovieCard from './MovieCard';


const SearchView = ({keyword, searchResult }) => {

    const title = `You are searching for ${keyword}`
    var card = searchResult.map((obj, i) => {
      return <MovieCard obj={obj} key={i} />
    })
    console.log(searchResult);

    var farzProb
    if (card.length !== 0) {
       farzProb = <div className='container-fluid'>
                    <div className='row'>
                       { card }
                    </div>
                  </div>
    } else {
        farzProb = <div className='col-8 text-center mx-auto my-5'>
                     <h1 className='fw-bold mb-3'>Oops!</h1>
                     <p>We couldn't find this title for you, check your spelling or try another title :)</p>
                   </div>   
    }

    return (
        <div>
            <Hero text={title} />
            { farzProb }
        </div>
    );
}

export default SearchView;




