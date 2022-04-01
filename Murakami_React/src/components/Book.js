import React from 'react'
import PropTypes from 'prop-types'
import "../App.css"
// 使用鉤子
function Book(props) {
  const{book,pic}=props;
  
  return (
    <>
        <div className='book'>
          <img src={pic} alt="" />
          <div>{book}</div>
        </div>
    </>
  )
}

Book.propTypes = {}

export default Book
