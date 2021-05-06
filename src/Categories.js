import React, { useState } from 'react';
import Data from './data'
const Categories = ({filterItems, categories}) => {
  return (
    <div className='btn-container'>
      {categories.map((temp,index) => {
        return (
        <button type='button' key={index} className='filter-btn' onClick={() => 
          filterItems(temp)}>
          {temp}
          </button>
          )
      })}
    </div>
  )
};

export default Categories;
