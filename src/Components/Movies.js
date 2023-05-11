import React from 'react'
import { useGlobalContext } from '../context/ContextStore'
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const { movie, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <div>
        <div>
          <h2>Loading.....</h2>
        </div>
      </div>
    );
  }
  else {
    return (
      <>
        <section className='mx-6'>
          <div className='grid  auto-rows-auto grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 p-4"'>
            {
              movie.map((curMovie) => {
                const { imdbID, Title, Poster } = curMovie;

                const movieName = Title.substring(0, 15);

                return <NavLink to={`movie/${imdbID}`} key={imdbID} >
                  <div className='border m-3 border-slate-700 rounded-md'>
                  <div className="relative lg:h-1/2 lg:w-[80%] md:w-[300] md:h-[400] rounded-md m-6 p-2 hover:scale-105">
                    <img className="z-0 h-full w-full rounded-md object-cover"
                      src={Poster} alt={imdbID} />
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 text-left">
                      <h1 class="text-lg font-semibold text-white">{movieName.length >= 15 ? `${movieName}...` : movieName}</h1>
                  
                    </div>
  


                  </div>
                  </div>

                </NavLink>
              })
            }
          </div>

        </section>


      </>
    )
  }
}

export default Movies