import React from 'react'
import ProductRatings from './ProductRatings';
import ProductBadge from './ProductBadge';

const ProductDetails = ({props}) => {
    
    const name = props.title;
    const brand = props.brand;
    const ratings = props.ratings;

  return (
    <div className='mb-1'>
        {/* title */}
        <div className='text-xl xl:text-2xl font-medium mb-1 text-black'>
            {name}
        </div>
        {/* brand */}
        <div className="text-sm xl:text-base mb-1">
            by <span className="text-blue-500">{brand}</span>
        </div>
        {/* ratings */}
        {ratings && (
            <div className="text-sm xl:text-base mb-1">
                <ProductRatings props={props} />
            </div>
        )}
        {/* attribute */}
        <div className="text-xs xl:text-sm font-bold mb-1">
            {props.attribute}
        </div>
        {/* badge */}
        <div>
            <ProductBadge props={props}/>
        </div>
    </div>
  )
}

export default ProductDetails