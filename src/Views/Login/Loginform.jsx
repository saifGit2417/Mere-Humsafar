import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import style from './Loginform.module.css';
import { useForm } from "react-hook-form";
import Contactlogocard from '../Contactus/contactlogocard';

function Loginform() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const logIn = () => {

    }
    return (
        <div className={style.maincontainer}>
            <div className={style.logincontainer}>
                <div className={style.formcontainer}>
                    <Form onSubmit={handleSubmit(logIn)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Registered email" {...register("email", { required: "*Enter Your registered e-mail" })} />
                        </Form.Group>
                        <p className={style.warning}>{errors?.email?.message}</p>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" {...register("password", { required: "*Enter Your Password" })} />
                        </Form.Group>
                        <p className={style.warning}>{errors?.password?.message}</p>
                        <Button variant="success" type="submit">LogIn</Button>
                    </Form>
                    <p style={{fontSize:"30px",textAlign:"center",fontWeight:"bold"}}>LogIn Via</p>
                    <div className={style.logo}>
                        <Contactlogocard link="https://www.facebook.com/" logoimage="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" />
                        <Contactlogocard link="https://www.instagram.com/" logoimage="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png" />
                        <Contactlogocard link="https://www.gmail.com/" logoimage="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo-768x432.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loginform;