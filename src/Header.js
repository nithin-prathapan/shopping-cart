import React from "react";
import "./Header.css"
function Header() {
  

  return (
    <div className="header">
      <a href="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </a>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
       
      </div>

      <div className="header__nav">
        <a href={'/login'}>
          <div  className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo"></span>
          </div>
        </a>

        <a href='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </a>
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <a href="/checkout">
          <div className="header__optionBasket">
        
            <span className="header__optionLineTwo header__basketCount">
            
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Header;