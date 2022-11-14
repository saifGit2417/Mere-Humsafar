import React from 'react'
import style from './Contact.module.css'

function Contactlogocard({link,logoimage}) {
  return (
    <div>
<a href={link} target="_blank"><img className={style.logoimage} src={logoimage} /></a>
    </div>
  )
}

export default Contactlogocard;