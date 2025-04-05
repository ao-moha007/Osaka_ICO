import React from 'react';
import Image from "next/image";
import { ethers } from "ethers";
//---- INTERNAL IMPORT
import Style from "./user.module.css"
import funTokenIMG from "../../assets/funtokenIMG.png"



const User = ({holderToken}) => {
  
  return (
    <div className={Style.user}>
      
      {/* {holderArray &&  */}
      {holderToken && holderToken.map((el,i)=>( // !!! holderToken is fetched or calculated asynchronously, you need to handle the loading state. we have to be sure that holderToken is not undefined, false or null
        <div key={i+1} className={Style.user_box}>
          <h4 className='Style.user_box_name'>
             User # {i} {/*normally i should diplay this {el[0].toBigInt()} but there is a problem in the contract that should be fixed : _usedID should be replaced by transactionID */}
          </h4>
          <div className={Style.user_box_price_box}>
            <p className={Style.user_box_price}>{ethers.utils.formatUnits(el[3].toBigInt(), 18) } Token </p>
            <p className={Style.user_box_status}>
               Your Token worth : {ethers.utils.formatUnits(el[3].toBigInt(), 18)  * 50}$
            </p>
            {/* <h4 className={Style.user_box_name}>
            User # 
          </h4>
          <div className={Style.user_box_price_box}>
            <p className={Style.user_box_price}> Token </p>
            <p className={Style.user_box_status}>
               Your Token worth
            </p> */}
          </div>
          <div className={Style.user_box_img}>
            <Image className={Style.user_box_img_img}
             src={funTokenIMG} 
             alt="funToken" 
             width={35} 
             height={35}
              />
              <p> To :{""} {el[1].slice(0,22)}  </p>
             
          </div>
        </div>
      ))}
    </div>
  );
};

export default User ;