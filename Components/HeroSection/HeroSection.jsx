import React,{useState,useEffect} from 'react'
import Image from 'next/image';

// INTERNAL IMPORTS
import Styles from "./HeroSection.module.css";
import images from "../../assets";
import { Token,SearchToken } from '../index';

const HeroSection = ({accounts, tokenData}) => {
  const [openSetting,setOpenSetting] = useState(false);
  const [openToken,setOpenToken] = useState(false);
  const [openTokensTwo,setOpenTokensTwo] = useState(false);

  // TOKEN1
  const [tokenOne,setTokenOne] = useState({
    name: "",
    image: ""
  });

  // TOKEN2
  const [tokenTwo,setTokenTwo] = useState({
    name: "",
    image: ""
  });
  return (
    <div className={Styles.HeroSection}>
      <div className={Styles.HeroSection_box}>
        <div className={Styles.HeroSection_box_heading}>
          <p>Swap</p>
          <div className={Styles.HeroSection_box_heading_img}>
            <Image src={images.close}
              alt='close'
              width={50}
              height={50}
              onClick={() => setOpenSetting(true)}/>
          </div>
        </div>
        <div className={Styles.HeroSection_box_input}>
          <input type='text' placeholder='0'></input>
          <button onClick={() => setOpenToken(true)}>
            <Image
              src={tokenOne.image || images.etherlogo}
              width={20}
              height={20}
              alt='ether'
            />
            {tokenOne.name || "ETH"}
            <small>9292</small>
          </button>
        </div>

        <div className={Styles.HeroSection_box_input}>
          <input type='text' placeholder='0'></input>
          <button onClick={() => setOpenTokensTwo(true)}>
            <Image
              src={tokenTwo.image || images.etherlogo}
              width={20}
              height={20}
              alt='ether'
            />
            {tokenTwo.name || "ETH"}
            <small>9292</small>
          </button>
        </div>

        {accounts ? (
          <button className={Styles.HeroSection_box_btn}>Connect Wallet</button>
        ):(
          <button className={Styles.HeroSection_box_btn} onclick={() => {}}>
            Swap
          </button>
        )}
      </div>

      {openSetting && <Token setOpenSetting={setOpenSetting}/>}

      {openToken && (
        <SearchToken
          openToken = {setOpenToken}
          tokens = {setTokenOne}
          tokenData = {tokenData}/>
      )}

      {openTokensTwo && (
        <SearchToken
          openToken = {setOpenTokensTwo}
          tokens = {setTokenTwo}
          tokenData = {tokenData}/>
      )}
    </div>
  )
}

export default HeroSection