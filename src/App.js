import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import './App.css'
import SearchIcon from './search.svg'
const apiKey = 'http://www.omdbapi.com/?i=tt3896198&apikey=d8b0ba6'

// const MovieX = {
//   Title: 'Death Race',
//   Year: '2008',
//   imdbID: 'tt0452608',
//   Type: 'movie',
//   Poster:
//     'https://m.media-amazon.com/images/M/MV5BZTA4ODc4YTQtM2YyZS00YTgzLTgyMTAtMTg4Y2Q1YWFmZDYzXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg',
// }

function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState([])

  const searchMovies = async (Title) => {
    const response = await fetch(`${apiKey}&s=${Title}`)
    const data = await response.json()
    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('death')
  }, [])

  return (
    <div className='app'>
      <h1>CineMon....</h1>
      <div className='search'>
        <input
          placeholder='Search for Movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => {
            searchMovies(searchTerm)
          }}
        />
      </div>

      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  )
}

export default App
