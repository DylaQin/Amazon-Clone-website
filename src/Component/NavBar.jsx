import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


const NavBar = () => {
    const cart = useSelector((state)=>state.cart.productsNumber);
  return (
    <header className='min-w-[1000px]'>
        <div className='bg-amazonclone-light_blue text-white h-[60px] flex m4'>
            <div className='flex items-center'>
                <Link to={'/'}>
                    <img className='h-[35px] w-[100px] m-2'
                        src="../images/amazon.png" alt="" />
                </Link>
                
                <div className='px-4'>
                    <div className='text-xs xl:text-sm'>Deliver to</div>
                    <div className='text-sm xl:text-base font-bold'>United Kingdom</div>
                </div>
            </div>
            
            <div className='flex grow items-center'>
                <Search />
            </div>

            <div className='flex items-center m4'>
                <div className='px-4'>
                    <div className='text-xs xl:text-sm'>Hello, sign in</div>
                    <div className='text-sm xl:text-base font-bold'>Account & Lists</div>
                </div>
                <div className='px-4'>
                    <div className='text-xs xl:text-sm'>Returns</div>
                    <div className='text-sm xl:text-base font-bold'>&Orders</div>
                </div>

                {/* <Link to={'/checkout'}> */}
                    <div className='px-4 flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[48px]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <div className="relative">
                            <div className="absolute right-[9px] font-bold m-2 text-orange-400">
                            {cart}
                            </div>
                        </div>
                        <div className='mt-7 xl:text-sm font-bold'>Cart</div>
                    </div>
                {/* </Link> */}
            </div>
        </div>
        <div className='flex w-[100%] bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6'>
            <div>Today's Deals</div>
            <div>Customer Service</div>
            <div>Registry</div>
            <div>Gift Cards</div>
            <div>Sell</div>
        </div>
    </header>

  )
}

export default NavBar