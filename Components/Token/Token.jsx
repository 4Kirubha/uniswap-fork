import React,{useState,useEffect} from 'react';
import Image from 'next/image';

//INTERNAL IMPORTS
import Styles from "./Token.module.css";
import images from "../../assets";
import { Toggle } from '../index';

const Token = ({ setOpenSetting }) => {
  return (
    <div className={Styles.Token}>
        <div className={Styles.Token_box}>
            <div className={Styles.Token_box_heading}>
                <h4>Settings</h4>
                <Image
                  src={images.close}
                  alt='logo'
                  width={50}
                  height={50}
                  onClick={() => setOpenSetting(false)}
                  />
            </div>
            <p className={Styles.Token_box_para}>
              Slippage tolerance{""}
              <Image src={images.lock} alt='img' width={20} height={20}></Image>
            </p>
            <div className={Styles.Token_box_input}>
              <button>Auto</button>
              <input type='text' placeholder='0.10%'></input>
            </div>
            <p className={Styles.Token_box_para}>
              Slippage tolerance{""}
              <Image src={images.lock} alt='img' width={20} height={20}></Image>
            </p>
            <div className={Styles.Token_box_input}>
              <input type='text' placeholder='30'></input>
              <button>minutes</button>
            </div>
            <h2>Interface Setting</h2>
            <div className={Styles.Token_box_toggle}>
              <p className={Styles.Token_box_para}>Transaction deadline</p>
              <Toggle></Toggle>
            </div>
        </div>
    </div>
  )
}

export default Token;