import React from 'react'

//INTERNAL IMPORTS
import Styles from "./Toggle.module.css";
const Toggle = ({label}) => {
  return (
    <div className={Styles.Toggle}>
      <div className={Styles.Toggle_switch_box}>
        <input type='checkbox'
          className={Styles.Toggle_checkbox}
          name={label}
          id={label}>
        </input>
        <label className={Styles.Toggle_label} htmlFor={label}>
          <span className={Styles.Toggle_inner}></span>
          <span className={Styles.Toggle_switch}></span>
        </label>
      </div>
    </div>
  )
}

export default Toggle