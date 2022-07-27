import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes, Route} from 'react-router-dom'
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import NotFound from './components/NotFound';


export default function App() {
    const [searchResult, setSearchResult] = React.useState([])
    const [searchText, setSearchText] = React.useState("")

    React.useEffect(() => {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=007c95628f1666fe5585790b4db624c3&language=en-US&query=${searchText}&page=1&include_adult=false`
      // const detailUrl = `/movie/${id}` 
      if(searchText){
        fetch(url)
        .then(res => res.json())
        .then(data => { 
           setSearchResult(data.results) 
        })
        .catch(err => console.log(err))
      }
    }, [searchText]);
  return (
    <div className='app'>
        <Navbar keyword={searchText} setSearchText={setSearchText} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<SearchView keyword={searchText} searchResult={searchResult} />} />
          <Route path="movie/:id" element={<MovieView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}