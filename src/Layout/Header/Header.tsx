import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";

const Header = () => {
  const HeaderDiv = styled.div`
    display: flex;
    height: 60px;
    align-items: center;
    background-color: #131921;
    position: sticky;
    top: 0;
    z-index: 100;
    .header__logo {
      display: flex;
      align-items: center;
      color: #ff9f00;
      margin: 0 25px;
      .header__logoImage {
        margin-right: 10px;
      }
      .header__logoTitle {
        color: #ffffff;
        border: 0;
        text-decoration: none;
      }
    }
    .header__search {
      display: flex;
      flex: 1;
      align-items: center;
      border-radius: 24px;
      margin: 0 10px;

      .header__searchInput {
        height: 12px;
        padding: 10px;
        border: none;
        width: 100%;
      }
      .header__searchIcon {
        padding: 5px;
        height: 22px !important;
        background-color: #ff9f00;
      }
    }
    .header__nav {
      display: flex;
      justify-content: space-evenly;
      .nav__item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;
        margin-right: 10px;
        color: #ffffff;
        .nav__itemone {
          font-size: 10px;
        }
        .nav__itemtwo {
          font-size: 13px;
          font-weight: 800;
        }
      }
      .nav__itembasket {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 50px;
        margin-left: 10px;
        .nav__basketiocn {
          margin-right: 5px;
        }
      }
    }
  `;
  return (
    <HeaderDiv className="header">
      <div className="header__logo">
        <StorefrontIcon className="header__logoImage" fontSize="large" />
        <h2 className="header__logoTitle"> eShop</h2>
      </div>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemone"> Hello Guest</span>
          <span className="nav__itemtwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemone"> Your</span>
          <span className="nav__itemtwo">Shop</span>{" "}
        </div>
        <div className="nav__item nav__itembasket">
          <ShoppingBasketIcon className="nav__basketiocn" />
          <span className="nav__itemtwo basket-count">0</span>{" "}
        </div>
      </div>
    </HeaderDiv>
  );
};

export default Header;
