import React from 'react'
import Footercard from './Footercard';
import style from './Footer.module.css'

function Footermain() {
    return (
        <div className={style.container}>
            <div className={style.Footermaincontainer}>
                <Footercard cardhead="Need Help?" sub1={{ title: "login", to: "/login" }} sub2={{ title: "Sign Up Now", to: "/RegisterationForm" }} sub3={{ title: "Customer Support", to: "/Customersupport" }} sub4={{ title: "About Us", to: "/Aboutus" }} />
                <Footercard cardhead="Company" sub1={{ title: "About Us", to: "/Aboutus" }} sub2={{ title: "Testimonals", to: "" }} sub3={{ title: "Contact Us", to: "/ContactUs" }} sub4={{ title: "", to: "" }} />
                <Footercard cardhead="Privacy & You" sub1={{ title: "Terms Of Use", to: "/TermsofUse" }} sub2={{ title: "Privacy Policy", to: "/Privacypolicy" }} sub3={{ title: "Be Safe Online", to: "/Besafeonline" }} sub4={{ title: "", to: "/" }} />
                <Footercard cardhead="Connect with Us" sub1={{ title: "E-mail:MereHumsafar@gmail.com" }} sub2={{ title: "Phone:+91 9876543210" }} sub3={{ title: "Adress:Mera Hamsafar Marriage" }} sub4={{ title: "Sahebji Manzil, Sangli, Maharashtra." }} />
            </div>
            <div className={style.brand}><h3>	&#169;1996-2022 MereHumsafar.com , The Worlds Leading Matchmaking Services &#8482;</h3></div>
        </div>
    )
}

export default Footermain;