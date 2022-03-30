import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Menu from "./Menu.js"

function Header(props) {
  return (
    <>
    
        <div className='header'>
            <h1>村上春樹文學館</h1>
        </div>
            <Menu/>
    </>
  )
}

Header.propTypes = {}

export default Header
