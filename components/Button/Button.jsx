import React from 'react'
import css from "./Button.module.css"


export const Button = ({children, onClick, type, classNameProp}) => {
  return (
    <button style={classNameProp} type={type} onClick={onClick} className={css.button}>
        {children}
    </button>
  )
}
