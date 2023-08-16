import React from 'react'

const Search = () => {
  return (
    <div className='w-[100%]'>
        <div className='flex items-center h-10 bg-amazonclone-yellow rounded'>
            <select className='bg-gray-300 text-black text-xs xl:text-sm p-2'>
                <option>All</option>
                <option>Deals</option>
                <option>Amazon</option>
                <option>Fashion</option>
                <option>Comnputers</option>
                <option>Home</option>
                <option>Mobiles</option>
            </select>
            <input className='flex grow items-center h-[100%] rounded-l text-black' type='text'></input>
            <button className='w-[45px]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6 m-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
        </div>
    </div>
  )
}

export default Search