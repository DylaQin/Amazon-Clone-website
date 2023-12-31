import React from 'react'

const HomepageCard = ({title, img, link}) => {
  return (
    <div className='h-[420px] bg-white m-3 z-30'>
      <div className='text-lg xl:text-xl font-semibold ml-4 mt-4'>
        {title}
      </div>
      <div className='h-[300px] m-4 object-cover '>
        <img src={img} alt=""/>
      </div>
      <div className='text-xs xl:text-sm text-blue-400 ml-4'>
        {link}
      </div>
    </div>
  )
}

export default HomepageCard