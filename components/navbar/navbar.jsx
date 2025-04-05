import React, { useState, useContext } from 'react';
import Image from "next/image";
import { ethers } from "ethers";
//--INTERNAL IMPORT
import Style from "./navbar.module.css";
import { ERC20ICOContext } from "../../context/osakaToken";
import banner from "../../assets/home_banner.png";
//import loader from '../../assets/loader.gif';
import funTokenIMG from "../../assets/funtokenIMG.png"

const Navbar = () => {
 
  return (
    
    <div className={Style.layout}>
      <div className={Style.navBar_box}>
        <div>
          
          
          <br />
        </div>
      </div>
    </div>
  );
};

export default Navbar;