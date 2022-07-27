import React, { useContext, useState } from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import ThemeContext from "../../theme/themeContext";

const Header = (): React.ReactElement => {
  const { colors } = useContext(ThemeContext);
  const [open, setOpen] = useState<boolean>(
    window.innerWidth > 650 ? true : false
  );

  const handleOpenClose = () => {
    setOpen((preSt) => !preSt);
  };

  const HeaderDiv = styled.div`
    display: flex;
    height: 60px;
    align-items: center;
    background-color: ${colors.primaryDark};
    position: sticky;
    top: 0;
    z-index: 100;
    .header__logo {
      display: flex;
      align-items: center;
      color: ${colors.primaryOrange};
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
    .header__menuicon {
      color: ${colors.white};
      display: none;
      align-items: center;
      margin-right: 15px;
    }
    .header__sub {
      display: flex;
      justify-self: flex-end;
      flex-grow: 1;
      .header__search {
        display: flex;
        flex: 1;
        align-items: center;
        margin: 0 10px;
        .header__searchInput {
          height: 12px;
          padding: 10px;
          border: none;
          width: 100%;
          &:focus {
            outline: none;
          }
        }
        .header__searchIcon {
          padding: 5px;
          height: 22px !important;
          background-color: ${colors.primaryOrange};
          cursor: pointer;
        }
        &:hover {
          box-shadow: 0 0 0 2px ${colors.primaryOrange};
          transform: scale(1.001);
          transition-duration: 0.5s;
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
          cursor: pointer;
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
          .basket-count {
            color: ${colors.primaryOrange};
          }
          &:hover {
            transform: scale(1.2);
            transition-duration: 0.5s;
          }
        }
      }
    }
    @media only screen and (max-width: 650px) {
      flex-wrap: wrap;
      justify-content: space-between;
      height: auto;
      .header__menuicon {
        display: flex;
      }
      .header__sub {
        flex-direction: column;
        width: 100%;
        .header__search {
          margin: 12px 10px;
        }
        .header__nav {
          flex-direction: column;
          align-items: center;
          .nav__item {
            flex-direction: row;
            padding: 8px;
            width: 100%;
            border-top: 1px solid ${colors.white};
            align-items: center;
            .nav__itemone {
              margin-right: 10px;
            }
          }
          .nav__itembasket {
            margin: 0;
          }
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
      {open ? (
        <MenuOpenIcon
          fontSize="large"
          className="header__menuicon"
          onClick={handleOpenClose}
        />
      ) : (
        <MenuIcon
          fontSize="large"
          className="header__menuicon"
          onClick={handleOpenClose}
        />
      )}
      {open && (
        <div className="header__sub">
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
        </div>
      )}
    </HeaderDiv>
  );
};

export default Header;
