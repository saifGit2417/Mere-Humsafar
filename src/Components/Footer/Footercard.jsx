import { React, useState } from 'react'
import style from './Footer.module.css'
import { Link, To } from "react-router-dom"

function Footercard({ cardhead, sub1, sub2, sub3, sub4 }) {
    return (
        <div className={style.cardcontainer}>
            <p className={style.cardheading}>{cardhead}</p>
            <ul className={style.cardmainlist}>
                <li className={style.sublist}>
                    <Link to={sub1.to}  className={style.sublist}>{sub1.title}</Link>
                </li>
                <li className={style.sublist}>
                    <Link to={sub2.to}  className={style.sublist}>{sub2.title}</Link>
                </li>
                <li className={style.sublist}>
                    <Link to={sub3.to}  className={style.sublist}>{sub3.title}</Link>
                </li>
                <li className={style.sublist}>
                    <Link to={sub4.to}  className={style.sublist}>{sub4.title}</Link>
                </li>
            </ul>
        </div>
    )
}

export default Footercard