import React,{useState,useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';

// INTERNAL IMPORTS
import Styles from "./Model.module.css";
import images from "../../assets";

const Model = ({ setOpenModel,connectWallet }) => {
  const walletMenu = ["MetaMask", "Coinbase", "Wallet", "WalletConnect"];
  return (
    <div className={Styles.Model}>
      <div className={Styles.Model_box}>
        <div className={Styles.Model_box_heading}>
          <p>Connect a wallet</p>
          <div className={Styles.Model_box_heading_img}>
            <Image src={images.close}
              alt='logo'
              width={50}
              height={50}
              onClick={() => setOpenModel(false)}>
            </Image>
          </div>
        </div>

        <div className={Styles.Model_box_wallet}>
          {walletMenu.map((el,i) =>(
            <p key={i+1} onClick={() => connectWallet()}>
              {el}
            </p>
          ))}
        </div>

        <p className={Styles.Model_box_para}>
          By connecting a wallet, you agree to Uniswap Labs'
          <br/>Terms of Service and consent to its Privacy Policy.
        </p>
      </div>
    </div>
  )
}

export default Model