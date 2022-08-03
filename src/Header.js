import React from "react";
import "./Header.css";


import { Link } from "react-router-dom";



function Header() {
  

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
       
      </div>

      <div className="header__nav">
        <Link to={'/login'}>
          <div  className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo"></span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
        
            <span className="header__optionLineTwo header__basketCount">
            
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;