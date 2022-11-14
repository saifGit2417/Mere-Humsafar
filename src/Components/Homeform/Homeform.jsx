import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import style from './Homeform.module.css'

function Homeform() {
    const [formmsg, setformmsg] = useState("")

    const formsubmitmsg = () => {
        setformmsg(formmsg === "" ? "Congratulations , We've Matched Your Intrests!" : "")
    }
    return (
        <>
            <h1>Trusted Matrimony & Matchmaking Services</h1>
            <div className={style.formcontainer}>
                <p className={style.formtext}>I am Looking For</p>
                <Form.Select aria-label="Floating label select example" className={style.options}>
                    <option>Select Gender</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                </Form.Select>
                <p className={style.formtext}>aged from</p>
                <Form.Select aria-label="Floating label select example" className={style.options}>
                    <option>Select Age</option>
                    <option value="1">18</option>
                    <option value="2">19</option>
                    <option value="3">20</option>
                    <option value="4">21</option>
                    <option value="5">22</option>
                    <option value="6">23</option>
                    <option value="7">24</option>
                    <option value="8">25</option>
                </Form.Select>
                <p className={style.formtext}>to</p>
                <Form.Select aria-label="Floating label select example" className={style.options}>
                    <option>Select Age</option>
                    <option value="1">18</option>
                    <option value="2">19</option>
                    <option value="3">20</option>
                    <option value="4">21</option>
                    <option value="5">22</option>
                    <option value="6">23</option>
                    <option value="7">24</option>
                    <option value="8">25</option>
                </Form.Select>
                <p className={style.formtext}>State Of Residence</p>
                <Form.Select aria-label="Floating label select example" className={style.options}>
                    <option>Select Region</option>
                    <option value="1">North India</option>
                    <option value="2">South India</option>
                    <option value="3">West India</option>
                    <option value="4">East India</option>
                    <option value="5">North-East India</option>
                </Form.Select>
                <Button variant="success" className={style.button} onClick={formsubmitmsg}>Find Match</Button>
                {/* <div className={style.buttonreset}>
                    <Button variant="warning" className={style.button} onClick={() => { setformmsg("") }}>Reset Filter</Button>
                </div> */}
            </div>
             <h2 style={{}} className={style.congmsg}>{formmsg}</h2>
        </>
    )
}

export default Homeform