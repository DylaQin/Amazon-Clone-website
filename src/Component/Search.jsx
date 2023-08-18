import React, { useEffect, useState } from 'react'
import { callAPI } from '../utils/CallApi';
import { Navigate, createSearchParams, useNavigate } from 'react-router-dom';

const Search = () => {

    const [suggestions, setSuggestions] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("All");

    const navigate = useNavigate();

    const onHandleSubmit = (e) => {
        // This line prevents the default form submission behavior, which would cause the page to reload.
        e.preventDefault();
    
        navigate({
          pathname: "search",
          search: `${createSearchParams({
            category: `${category}`,
            searchTerm: `${searchTerm}`,
          })}`,
        });
        
        // clear all history
        setSearchTerm("");
        setCategory("All");
    };

    const getSuggestions = () => { 
        callAPI(`data/suggestions.json`)
        .then((suggestionResults) => {
            setSuggestions(suggestionResults);
        })
    }

    useEffect(() => {
        getSuggestions();
    }, [])
    
  return (
    <div className='w-[100%]'>
        <div className='flex items-center h-10 bg-amazonclone-yellow rounded'>
            <select 
                className='bg-gray-300 text-black text-xs xl:text-sm p-2'
                onChange={(e)=>setCategory(e.target.category)}
            >
                <option>All</option>
                <option>Deals</option>
                <option>Amazon</option>
                <option>Fashion</option>
                <option>Computers</option>
                <option>Home</option>
                <option>Mobiles</option>
            </select>
            <input 
                className='flex grow items-center h-[100%] rounded-l text-black' 
                type='text' 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className='w-[45px]' onClick={onHandleSubmit}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6 m-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
        </div>
        {suggestions && (
            <div className="bg-white text-black w-full z-40 absolute">
                {suggestions
                    .filter((suggestion) => {
                        const currentSearchTerm = searchTerm.toLowerCase();
                        const title = suggestion.title.toLowerCase();
                        return (
                            currentSearchTerm &&
                            title.startsWith(currentSearchTerm) &&
                            title !== currentSearchTerm
                        );
                        })
                        .slice(0, 10)
                        .map((suggestion) => (
                            <div
                                key={suggestion.id}
                                onClick={() => setSearchTerm(suggestion.title)}
                            >
                                {suggestion.title}
                            </div>
                    ))}
            </div>
        )}
    </div>
  )
}

export default Search