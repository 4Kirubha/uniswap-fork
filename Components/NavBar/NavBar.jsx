import {React,useState,useEffect,useContext} from 'react';
import Image from 'next/image';
import Link from 'next/link';

// INTERNAL IMPORTS

import Styles from "./NavBar.module.css";
import images from "../../assets";
import { Model,TokenList } from '../index';

const NavBar = () => {
  const menuItems = [
    {
      name : "Swap",
      link : "/"
    },
    {
      name : "Tokens",
      link : "/"
    },
    {
      name : "Pools",
      link : "/"
    }
  ]
  const [openModel,setOpenModel] = useState(false);
  const [openTokenBox,setOpenTokenBox] = useState(false);
  const [account,setAccount] = useState(false);

  return (
    <div className={Styles.NavBar}>
      <div className={Styles.NavBar_box}>
        <div className={Styles.NavBar_box_left}>
          {/* LOGO IMAGE */}
          <div className={Styles.NavBar_box_left_img}>
            <Image src={images.uniswap} alt='logo' width={50} height={50} />
          </div>
          {/*LEFT MENU*/}
          <div className={Styles.NavBar_box_left_menu}>
            {menuItems.map((el,i) =>(
              <Link
                key={i+1}
                href={{pathname: `${el.name}`, query:`${el.link}`}}
              >
                <p className={Styles.NavBar_box_left_menu_item}>{el.name}</p>
              </Link>
            ))}
          </div>
        </div>
        {/** SEARCH BOX */}
        <div className={Styles.NavBar_box_middle}>
          <div className={Styles.NavBar_box_middle_search}>
            {/** SEARCH IMAGE */}
            <div className={Styles.NavBar_box_middle_search_img}>
              <Image src={images.search} alt='Search' width={20} height={20}></Image>
            </div>
            {/** INPUT BOX */}
            <div className={Styles.NavBar_box_middle_search_box}>
              <input type='text' placeholder='Search Tokens'></input>
            </div>
          </div>
        </div>
        {/** RIGHT MENU */}
        <div className={Styles.NavBar_box_right}>
          <div className={Styles.NavBar_box_right_box}>
            <div className={Styles.NavBar_box_right_box_img}>
              <Image src={images.ether} alt='Network' width={30} height={30}></Image>
            </div>
            <p>Network name</p>
          </div>
          {account ?(
            <button onClick={() => setOpenModel(true)}>Connect</button>

          ):(
            <button onClick={() => setOpenTokenBox(true)}>0x876b4dE......</button>
          )}
          {openModel && (
            <Model setOpenModel={setOpenModel} connectWallet = "connect"/>
          )}
        </div>
      </div>
      {/** TOKEN LIST */}
      {openTokenBox && (
        <TokenList tokenData = "hey" setOpenTokenBox={setOpenTokenBox}/>
      )}
    </div>
  );
};

export default NavBar;