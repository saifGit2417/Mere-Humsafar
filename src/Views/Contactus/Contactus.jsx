import React from 'react'
import Contactlogocard from './contactlogocard'
import style from './Contact.module.css'

function Contactus() {
  return (
    <div className={style.maincontainer}>
      <div className={style.logocontainer}>
        <Contactlogocard link="https://www.facebook.com/" logoimage="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" />
        <Contactlogocard link="https://www.twitter.com/" logoimage="https://1000logos.net/wp-content/uploads/2021/04/Twitter-logo.png" />
        <Contactlogocard link="https://www.instagram.com/" logoimage="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png" />
        <Contactlogocard link="https://www.google.com/" logoimage="https://1000logos.net/wp-content/uploads/2021/05/Google-logo-768x432.png" />
        <Contactlogocard link="https://www.gmail.com/" logoimage="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo-768x432.png" />
      </div >
      <div className={style.iframecontainer}>
        <iFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7545910.938400797!2d71.08400815717019!3d22.55939128690223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd73193ffffffff%3A0x7d28f89de3d0de6a!2sHumsafer%20Marriage%20Bureau!5e0!3m2!1sen!2sin!4v1666956937065!5m2!1sen!2sin" width="600" height="450"  ></iFrame>
        <table className={style.addtable}>
          <tr>
            <td>E-mail:</td>
            <td>	MereHumsafar@gmail.com</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>	+91 9876543210</td>
          </tr>
          <tr>
            <td>Adress:</td>
            <td>Mera Hamsafar Marriage Beuro VH69+29R, Sahebji Manzil, Navprabhat Chowk, Khanbhag, Sangli, Maharashtra 416416</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Contactus