import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='navBarContainer'>
        <div className="navBarLogo">
            <h2>MY SHOP</h2>
        </div>
        <div className="navBarCart">
            <Link to={'/cart'}><AddShoppingCartIcon/></Link>
            
        </div>
    </nav>
  )
}

export default NavBar