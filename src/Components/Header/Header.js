import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

function Header() {
  const [{ favorite }] = useStateValue();
  return (
    <div className='header'>
      <Link to='/'>
        <img
          alt='navimage'
          className='header__image'
          src='https://static.vecteezy.com/system/resources/thumbnails/000/193/445/small/cosmos_RF_RMPL-01.jpg'
        />
      </Link>
      <div className='header__Icons__span'>
        <Link to='/'>
          <HomeIcon className='header__Icons' />
        </Link>
        <Link className='header__favorite' to='/favorite'>
          <FavoriteBorderIcon className='header__Icons' />
          <span>{favorite?.length}</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;

//https://cdn.pixabay.com/photo/2017/12/28/04/52/illustration-3044430_960_720.png

//https://miro.medium.com/max/7284/1*UDM0nkstECIG8FI1hee_Mw.png
