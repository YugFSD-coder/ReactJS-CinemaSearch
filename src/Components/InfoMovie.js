import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom'
import { API_URL } from '../context/ContextStore';


const InfoMovie = () => {
  const { id } = useParams();


  //useState Hook
  const [isLoadig, setIsLoading] = useState(true);
  const [movie, setMovie] = useState();

  // getmovie function
  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      if (data.Response === 'True') {
        setIsLoading(false);
        setMovie(data);

      }

    } catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 500)
    return () => {
      clearTimeout(timeOut)
    }
  }, [id])

  if (isLoadig) {
    return (
      <div className='h-screen bg-slate-800 flex justify-center '>
        <div >
          <h2 className='text-3xl text-white font-bold pt-10'>Loading.....</h2>
        </div>
      </div>
    );
  }


  return (
    <div className='bg-slate-900 h-screen flex justify-center items-center'>
      <div class="md:bg-slate-800 flex max-w-2xl max-h-screen flex-col items-center rounded-md md:border border-slate-600 md:flex-row">
        <div class="h-1/3 w-1/3 md:h-[300px] md:w-[300px]">
          <img
            src={movie.Poster}
            alt="Poster"
            class="h-full w-full rounded-md object-cover"
          />
        </div>
        <div className='w-2/3 h-2/3  '>
          <div class="p-4">
            <div>
              <h1 class="inline-flex items-center text-xl font-semibold text-slate-100">
                {movie.Title}
              </h1>
              <p class="mt-3 text-sm text-gray-400">
                {movie.Plot}
              </p>
            </div>
            <div class="mt-4 text-sm text-slate-100 mb-4 ml-6">
              <p>{movie.Released}</p>
              <p>{movie.Genre}</p>
              <p>{movie.imdbRating} / 10</p>
              <p>{movie.Country}</p>
            </div>
            <NavLink to='/' className='mx-4 bg-slate-900 rounded-lg text-slate-100 p-2 text-sm'>
              Go Back
            </NavLink>
          </div>

        </div>
      </div>

    </div>
  )
}

export default InfoMovie;