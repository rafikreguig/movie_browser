import React from 'react'
import Hero from './Hero'
import { useParams } from 'react-router-dom'
import adult from '../imgs/adult.png'
import everyone from '../imgs/everyone.jpg'

export default function MovieView() {
const { id } = useParams()
const [movieDetails, setMovieDetails] = React.useState({})
const [isLaoding, setIsLaoding] = React.useState(true)

 React.useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=007c95628f1666fe5585790b4db624c3&language=en-US`)
    .then(res => res.json())
    .then(data =>{
        setMovieDetails(data)
        setIsLaoding(false)
    })
    .catch(err => console.log(err))
}, [id]);
 
 const imgUrl = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`


 return (
    <div>
       {isLaoding ? <Hero text="Laoding..." /> :
       <>
        <Hero text={movieDetails.title}  backdropPath={movieDetails.backdrop_path} />
        <div className="container my-5">
          <div className="row">
            <div className="col-10 col-md-4 mx-auto">
               <img src={imgUrl} alt={movieDetails.title} className="img-fluid rounded shadow-sm mb-5 mx-auto d-block" />
            </div>
            <div className="col-10 col-md-8 align-items-center mx-auto">
               <h1 className="title mb-3">{movieDetails.title} <img className="ml-5 rating-icon" src={movieDetails.adult ? everyone : adult} alt="Rating" /></h1>
               <p className="description">{movieDetails.overview}</p>
               {movieDetails.genres.length !== 0 && <p className="genres mb-3 fw-bold ml-0">Genres: {movieDetails.genres.slice(0, 5).map((gene, i) =>{ 
                    return <span key={i} className="genre">{gene.name}</span>
                  })}.
               </p>}
               <p className="date"><span className='fw-bold'>Release Date:</span> {movieDetails.release_date.split("-").reverse().join("-")}.</p>
               { movieDetails.homepage && <a href={movieDetails.homepage} className="btn btn-primary my-4" rel="noreferrer" target='_blank'>Official Website</a>}
            </div>
            </div>   
         </div> 
       </>} 
    </div>
 )
}
