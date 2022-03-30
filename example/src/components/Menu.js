import React from 'react'
// import PropTypes from 'prop-types'
import "./../App.css"
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
                <Link to="/Japan">文學</Link>
            </li>
            <li>
                <Link to="/Westen">翻譯文學</Link>            
            </li>
  
        </ul>
    </>
  )
}

Menu.propTypes = {}

export default Menu
