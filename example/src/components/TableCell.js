import React from 'react'
import PropTypes from 'prop-types'
import "../App.css"

function TableCell(props) {
    const{book,author,place}=props;
    // console.log(book);
  return (
    <>
        <div className='cellContents'>{book}</div>
        <div className='cellContents'>{author}</div>
        <div className='cellContents'>{place}</div>      
    </>
  )
}

TableCell.propTypes = {}

export default TableCell
