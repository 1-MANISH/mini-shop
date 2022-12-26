import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className='sideNavigation'>
        <div className="link">
            <Link to={'/electronics'}>Electronics</Link>
        </div>
        <div className="link">
            <Link to={'/jewelery'}>Jewelery</Link>
        </div>
        <div className="link">
            <Link to={'/mensclothing'}>Men's clothing</Link>
        </div>
        <div className="link">
            <Link to={'/womensclothing'}>Women's clothing</Link>
        </div>
    </div>
  )
}

export default Navigation