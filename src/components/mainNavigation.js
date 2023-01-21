import React from 'react';
import {Link} from "react-router-dom";
import FavoritesContext from '../store/favorites-context';
import WishlistContext from '../store/wishlist-context';
import {useContext} from "react";
function MainNavigation(){
    const favortiectx=useContext(FavoritesContext);
    const wishiectx=useContext(WishlistContext);
    return( <div>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'#16006e',fontSize:'1.4rem'}}>
        <a className="navbar-brand" href="#" style={{fontSize:'2rem',fontWeight:'bold',marginLeft:'7.55%'}}>Shopify..</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto " style={{margin:'0 auto'}}>
            <li className="nav-item active " style={{margin:'0 10px 0 40px'}}>
              <Link to="/shopy/"><a className="nav-link" >All Items</a></Link>
            </li>
            <li className="nav-item active" style={{margin:'0 10px 0 40px'}}>
              <Link to="/shopy/contact"><a className="nav-link" >Contact Us</a></Link>
            </li>
            <li className="nav-item active" style={{margin:'0 10px 0 40px'}}>
              <Link to="/shopy/favorites"><a className="nav-link"  >Items in cart {favortiectx.totalFavorites}</a></Link>
            </li>
            <li className="nav-item active" style={{margin:'0 10px 0 40px'}}>
              <Link to="/shopy/wishlist"><a className="nav-link"  >Wishlist {wishiectx.totalFavorites}</a></Link>
            </li>
          </ul>
          <form className="form-inline my-3">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      {/* <header className={classes.header}>
        <div className={classes.logo}>Shopify..</div>

        <nav>
            <ul>
                <li>
                    <Link to="/">All Items</Link>
                </li>
                <li>
                    <Link to="/favorites">Items in cart {favortiectx.totalFavorites}</Link>
                </li>
                <li>
                    <Link to="/wishlist">Wishlisted items {wishiectx.totalFavorites}</Link>
                </li>
            </ul>
        </nav>
    </header> */}
    </div>
    );
}
export default MainNavigation;