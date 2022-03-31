import React from 'react'
// import PropTypes from 'prop-types'
import "./../css/header.css"
import { Link } from 'react-router-dom'

function Menu(props) {
  return (
    <>
        <ul className='menu'>
            <li>
                <Link to="/Index">首頁</Link>
            </li>
            <li>
                <Link to="/Children">繪本</Link>
            </li>
            <li>
                <Link to="/Japan">小說</Link>
            </li>
            <li>
                <Link to="/Westen">散文</Link>            
            </li>
  
        </ul>
    </>
  )
}

Menu.propTypes = {}

export default Menu
