import React from 'react'
import PropTypes from 'prop-types'
import "../App.css"

function Book(props) {
  return (
    <div>
        <div className='book'>
            <div >
                <img src="https://picsum.photos/200/300" alt="" />
            </div>
            <div>假圖</div>
        </div>
    </div>
  )
}

Book.propTypes = {}

export default Book
