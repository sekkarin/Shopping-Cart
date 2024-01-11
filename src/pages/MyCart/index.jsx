import React from 'react'
import PropTypes from 'prop-types'

const MyCart = props => {
  return (
    <div className="grid grid-cols-4 p-2 ">
      <div className="col-span-3">
        <div className="flex ">
          <img src="https://www.bhphotovideo.com/images/images2500x2500/vizio_d32h_f4_d_series_32_class_smart_1437586.jpg" alt="" className='w-20 h-20' />
          <div className="">
            <p>TV</p>
            <p>TV</p>
            <p>TV</p>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="content-center">
          <span className='px-2 bg-teal-300'>+</span>
          <input type="number" name="" id="" />
          <span className='px-2 bg-teal-300'>-</span>
        </div>
      </div>
    </div>
  )
}

export default MyCart