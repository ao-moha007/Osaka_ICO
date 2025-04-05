import React, { useState, useEffect, useContext } from 'react';
import Image from "next/image";
//---INTERNAL IMPORT
import { ERC20ICOContext } from '../context/osakaToken';
import { ethers } from "ethers";
import Style from "../styles/index.module.css";
import banner from "../assets/home_banner.png";
import Transfer from '../components/Transfer/Transfer';
import Navbar from '../components/navbar/navbar';
import Header from '../components/header/header';
import User from '../components/User/User';
import FUN from "../assets/funTokenIMG.png";
const Home = () => {


  const { holderToken, transferToken, EtherHardhat, checkConnection, ERC20FunToken, transferToMeta, tokenHolderData, account, accountBalance, userId, NoOfToken, TokenName, TokenStandard, TokenSymbol, TokenOwner, TokenOwnerBal } = useContext(ERC20ICOContext);
  useEffect(() => {
    checkConnection();
    tokenHolderData();
    ERC20FunToken();
    //EtherHardhat();
    //transferToken("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",ethers.BigNumber.from("500000000000000000"));
    //ALWAYS USE THE FUNCTION ethers.BigNumber.from(value) INSTEAD OF value.toNumber() for big numbers over 1 million
    //transferToMeta("0x78A82c351b5CaAfc47b36f1c38FC837262A7f677",ethers.BigNumber.from("500000000000000000"));

  }, []);
  return (
    //className={StyleSheeet.home}>

    <div className={Style.home}>
      <div className="banner"
                    id="home"
                >
      <Header />
      <Navbar style={{ marginTop: "10px" }} />
      
        <div className={Style.herosSection}>
          <div className={Style.herosSection_left}>
            <h1> Launching OSAKA Token (OSK) ERC20 Token </h1>

            <div className={Style.block_left}>
              <p>
                An ICO (Initial Coin Offering) is a fundraising method used by blockchain and cryptocurrency projects to raise capital. In an ICO, a project issues and sells tokens or coins to investors in exchange for cryptocurrencies (like Bitcoin or Ethereum) or fiat money.
              </p>
            </div>

          
        </div>



       </div>
        <div className="col-xl-12 col-lg-6 wow fadeInRightBig"
            data-wow-delay="0.3s"
            data-wow-duration="0.5s">
                    <Transfer className="transfer"
                        NoOfToken={NoOfToken}
                        TokenName={TokenName}
                        TokenStandard={TokenStandard}
                        TokenSymbol={TokenSymbol}
                        transferToken={transferToken}
                        TokenOwnerBal={TokenOwnerBal}
                    />
       
        </div>
        <User
            holderToken={holderToken}>

        </User>
      </div>
      <div className="footer">
        <div className="container">

          <div className="row">
            <div className="col-12 tet-center wow fadeInUp"
              data-wow-duration="0.4s"
              data-wow-delay="0.4s"
            >
              <div className="footer-bottom">
                <p className="text">
                  Copyright &copy;
                  <a
                    href="#">aouichmed</a>
                  <a href="#">2025</a>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Home;
