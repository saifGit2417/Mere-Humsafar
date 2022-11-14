import React from 'react'
import Reusablecard from './Reusablecard'
import style from './Findcard.module.css'


function Findcard() {
    return (
        <>
            <h1>Find Your Special Someone</h1>
            <div className={style.findmain}>
                <Reusablecard imagelink="https://static.vecteezy.com/system/resources/previews/003/689/251/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg" cardTitle="Sign Up Now" cardText="Register for free & put up your Matrimony profile" buttontext="Sign Up" to="RegisterationForm" />

                <Reusablecard imagelink="https://as2.ftcdn.net/v2/jpg/02/16/16/99/1000_F_216169901_PDJv0NIH94nS991XRAFUA0PHjmuh7laN.jpg" cardTitle="Connect" cardText="Select & connect with matches you like" buttontext="Connect" to="logIn"/>


                <Reusablecard imagelink="https://img.freepik.com/premium-vector/mobile-chat-app-tiny-people-chatting-mobile-smartphone-screen-online-communication_501813-386.jpg?w=2000" cardTitle="Interact" cardText="Become a premium member & Start a conversation" buttontext="Interact" to="login" />
            </div >
        </>
    )
}

export default Findcard