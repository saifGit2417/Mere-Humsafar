import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import style from './Register.module.css'

function Registerform() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [message, setMessage] = useState("")
    const [warning, setWarning] = useState("")

    const submitForm = () => {
        setMessage("*Congratulations Registration Sucessfull")
    }

    return (
        <>
            <p className={style.head}>Registration Form</p>
            <div className={style.maincontainer}>
                <div className={style.image}>
                    <img src="https://u7.uidownload.com/vector/849/564/vector-cartoon-vector-illustration-of-man-working-with-computer--thumbnail.jpg" className={style.image1} />
                </div>
                <div className={style.formcontainer}>
                    <Form onSubmit={handleSubmit(submitForm)}>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Full Name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Full Name" {...register("fullname", { required: "*Enter Your Name" })} />
                        </Form.Group>
                        <p style={{ color: "red" }}>{errors?.fullname?.message}</p>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Mobile No:</Form.Label>
                            <Form.Control type="number" placeholder="Enter Mobileno" {...register("mobileno", { required: "*Enter Mobile No" })} />
                        </Form.Group>
                        <p style={{ color: "red" }}>{errors?.mobileno?.message}</p>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address:</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" {...register("email", { required: "*Enter Your Email" })} />
                        </Form.Group>
                        <p style={{ color: "red" }}>{errors?.email?.message}</p>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type="password" placeholder="Create Password" {...register("password", { required: "*Enter Password to create one!" })} />
                        </Form.Group>
                        <p style={{ color: "red" }}>{errors?.password?.message}</p>

                        <Button variant="success" type="submit" className='mx-1'>Register Yourself</Button>
                        <Button variant="warning" type='reset' className='mx-4'>Reset Form</Button>
                    </Form>
                </div>
            </div>
            <p className={style.congo}>{message}</p>
        </>
    )
}

export default Registerform