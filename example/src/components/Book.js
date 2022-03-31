import React from 'react'
import PropTypes from 'prop-types'
import "../App.css"

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
