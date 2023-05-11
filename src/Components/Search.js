import React from 'react'
import { useGlobalContext } from '../context/ContextStore'

const Search = () => {
    const { query, setQuery, isError } = useGlobalContext();

    return (
        <div className='flex flex-col items-center flex-wrap py-4 bg-slate-800'>
            <h2 className='text-3xl font-bold text-slate-100 mb-4'>Search Your Favourite  Movie</h2>
            <form className='w-full'
            action="#" onSubmit={(e) => {
                e.preventDefault();
            }}>
                <div className='w-full flex justify-center items-center flex-wrap'>
                    <input className='md:w-1/4 w-1/2 h-8 rounded-xl p-4 text-md font-semibold bg-slate-600 text-slate-100 out-of-range:border-red-500 ... focus:outline-none'
                    type='text' placeholder='Enter moive'
                        value={query}
                        onChange={(e) => { setQuery(e.target.value) }} />
                </div>
            </form>
            <div className='m-3'>
                <p className='text-red-500 text-lg'>{isError.show && isError.msg}</p>
            </div>
        </div>

    )
}

export default Search