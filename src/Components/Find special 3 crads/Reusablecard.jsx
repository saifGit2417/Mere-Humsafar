import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import style from './Findcard.module.css'

function Reusablecard({ imagelink, cardTitle, cardText, buttontext,to }) {
    return (
        <div className={style.reusecardcontainer}>
            <Card className={style.reusecardcontainer} >
                <Card.Img variant="top" src={imagelink} className={style.image} />
                <Card.Body>
                    <Card.Title>{cardTitle}</Card.Title>
                    <Card.Text>{cardText}</Card.Text>
                    <Link to={to}><Button variant="success" >{buttontext}</Button></Link>
                  
                </Card.Body>
            </Card>
        </div>
    );
}

export default Reusablecard;