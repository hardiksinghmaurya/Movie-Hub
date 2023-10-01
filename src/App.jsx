import { useEffect, useState } from 'react'

import Card from './Components/Card'
import Navbar from './Components/Nav';


export default function App() {

  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState("");
  const api_url = `${import.meta.env.VITE_MY_API}`;

  const search = async (title) => {

    const call = await fetch(`${api_url}&s=${title}`);
    const result = await call.json();
    setMovies(result.Search);
  }

  useEffect(() => {
    search("Thor")
  }, [])

  return (
    <>

    <Navbar searchMovies={searchMovies} setSearchMovies={setSearchMovies} search={search} />

      <main className="main bg-dark min-vh-100 d-flex justify-content-center align-item-center">
        {
          movies?.length > 0
            ?
            (
                        <div className="card-box d-flex flex-wrap flex-md-wrap px-5">
                        {movies.map((movie, key) =>
                        <Card movie={movie} key={key}/>
                        )}
                        </div>
            ) :
            
            "https://via.placeholder.com/400"
        }
      </main>

    </>
  )
}


