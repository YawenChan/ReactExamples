import React from 'react'
// import PropTypes from 'prop-types'
import "../App.css"
import { useState } from 'react';
function Index(props) {
  const[num,setNum]=useState(0);
  return (
    <>
    <div className='main'>Hi , this is index.
      <p>村上春樹粉絲數量:{num}</p>
      <button onClick={()=>{setNum(num+1)}}>我是鐵粉</button>
      <img src="" alt="" />
    
    </div>

    </>
  )
}

Index.propTypes = {}

export default Index
