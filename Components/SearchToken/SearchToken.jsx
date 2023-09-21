import React,{useState,useEffect} from 'react';
import Image from 'next/image';

//INTERNAL IMPORTS
import Styles from "./SearchToken.module.css";
import images from "../../assets";

const SearchToken = ({ openToken, tokens, tokenData }) => {
  const [active,setActive] = useState(1);
  const coin = [
    {
      img:images.ether,
      name:"ETH",
    },
    {
      img:images.ether,
      name:"DAI",
    },
    {
      img:images.ether,
      name:"USDT",
    },
    {
      img:images.ether,
      name:"USDC",
    },
    {
      img:images.ether,
      name:"LINK",
    },
    {
      img:images.ether,
      name:"UNI",
    },
    {
      img:images.ether,
      name:"MKR",
    },
    {
      img:images.ether,
      name:"AAVE",
    },
    {
      img:images.ether,
      name:"FXS",
    },
    {
      img:images.ether,
      name:"WETH9",
    },
    {
      img:images.ether,
      name:"WBTC",
    },
    {
      img:images.ether,
      name:"LDO",
    }
  ]
  return (
    <div className={Styles.SearchToken}>
      <div className={Styles.SearchToken_box}>
        <div className={Styles.SearchToken_box_heading}>
          <h4>Select a token</h4>
          <Image
            src={images.close}
            alt='logo'
            width={50}
            height={50}
            onClick={() => openToken(false)}
          />
        </div>

        <div className={Styles.SearchToken_box_search}>
          <div className={Styles.SearchToken_box_search_img}>
            <Image
              src={images.search}
              alt='search'
              width={20}
              height={20}
            />
          </div>
          <input type='text' placeholder='Search token and paste the address'></input>
        </div>

        <div className={Styles.SearchToken_box_tokens}>
          {coin.map((el,i) =>(
            <span
              key={i+1}
              className={active == i+1 ? `${Styles.active}` : ""}
              onClick={() => (
                setActive(i+1),tokens({name: el.name,image:el.img})
              )}
            >
              <Image
                src={el.img || images.ether}
                alt='image'
                width={30}
                height={30}
              />
              {el.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchToken