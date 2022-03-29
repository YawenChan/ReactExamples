import React from 'react'
// import PropTypes from 'prop-types'
import "./../App.css"
import { Link } from 'react-router-dom'

function Menu(props) {
  return (
    <div className='menu'>
        <ul>
            <li><a href="/#/">首頁</a></li>
            <li>
            {/* <Link to="../children"></Link> */}
                <a href="/#/Children">童書</a>
            </li>
            <li>
                <a href="/#/japan">日本文學</a>
            </li>
            <li>
                <a href="">西方文學</a>
                
            </li>
        </ul>
    </div>
  )
}

Menu.propTypes = {}

export default Menu
