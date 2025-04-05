import React, { useState,useContext } from 'react';
import Image from "next/image";
import { ethers } from "ethers";
//--INTERNAL IMPORT
import Style from "./transfer.module.css";
import StyleNav from "../navbar/navbar.module.css";
import { ERC20ICOContext } from "../../context/osakaToken";

const Transfer = ({NoOfToken,TokenName ,TokenStandard ,TokenSymbol ,transferToken ,TokenOwnerBal}) => {
  const [transferAccount,setTransferAcount] = useState('');
  const { account, accountBalance, userId } = useContext(ERC20ICOContext);
  const [tokenNumber,setTokenNumber] = useState(0);
  return (
    <div className={Style.transfer}>
      <div className={Style.transfer_box}>
      <div className={Style.transfer_box_left}>
      <h2>Token Analytics</h2>
        <div className={Style.transfer_box_left_box} >
          <p>
            Token Name
            <span>{TokenName}</span>
          </p>
          <p>
            Token Supply 
            <span>{NoOfToken.toString()}</span>
          </p>
          
          <p>
          {/* <Image className={Style.funToken_img} src={funToken} alt="Symbol" style={{ objectFit: 'cover' }} height={75} width={75} />
           */}
            Token Symbol {"   "} {":"} 
            <span>{TokenSymbol}</span>
            
          </p>
          
          <p>
            Token Standard {"   "}{":"}{""}
            <span>{TokenStandard.toString()}</span>
          </p>
          
          <p>
            Token left  {"   "} {":"} {" "}
            <span>{TokenOwnerBal.toString()}</span>
          </p>
         
        </div>
      </div>
      <div className={Style.transfer_box_right}>
      <div className={StyleNav.navBar_box_right}>
            <p>
              Token Balance {""} {""} <span>{accountBalance.toString() / 10 ** 18}</span>
            </p>
            <p>
              <span>
                UserId   : {userId.toString()} 
              </span>
            </p>
          </div>
         
        <h2>Transfer Token</h2>
        <div className={Style.transfer_box_right_block}>
        <input 
        placeholder="Address" 
        type="text" 
        onChange={(e)=> setTransferAcount(e.target.value)}
        />
        <input 
        placeholder="Token Number" 
        type="text" 
        min={1}
        onChange={(e)=> setTokenNumber(e.target.value)}
        />
        <div className={Style.transfer_box_right_btn}>
          <button onClick={()=>transferToken(transferAccount.trim(),ethers.BigNumber.from(tokenNumber.trim()))}>
            Send Token
          </button>
        </div>
        
        </div>
      </div>
    </div>
    </div>
  );
};

export default Transfer ;