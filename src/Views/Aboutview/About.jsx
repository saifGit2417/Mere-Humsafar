import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Aboutus() {
    return (
        <div>
            <Card style={{ width: '50vw', heigh: "100vh",marginLeft:"25vw",border:"none" }}>
                <Card.Img variant="top" src="https://images.moneycontrol.com/static-mcnews/2022/06/Shaadi.com-founder-Anupam-Mittal-is-also-a-judge-on-Shark-Tank-India.jpg?impolicy=website&width=1600&height=900" />
                <Card.Body>
                    <h2>Anupam Mittal (Founder)</h2>
                    <Card.Title>About The Founder</Card.Title>
                    <Card.Text style={{fontSize:"20px",textAlign:"left"}}>
                        Dear Guest, Merehumsafar.com, the world's oldest and most successful matchmaking service, has been trusted since 1996 by people all over the world to help them find their soulmates. Today, hundreds of thousands of people have met their life partners through our revolutionary matchmaking service and countless others have made some very special friends. Merehumsafar.com was founded by me in 1996 with one simple objective - to provide a superior matchmaking experience by expanding the opportunities available to meet potential life partners. Since then we have created a world renowned service that has touched the lives of millions of people all over the world. We have, however, never rested on our laurels. The mandate to team 'Merehumsafar.com' is clear - Understand the needs and concerns of singles all over the world through tireless research and analysis Provide a pleasant, satisfying, and superior matchmaking experience to our customers while zealously protecting their privacy and security Give our customers complete control through easy to use interfaces and features that can help them identify, filter and contact potential partners. The above objectives form the 3 pillars upon which 'Team merehumsafar.com' is built. 'Team Merehumsafar.com' is a set of hardworking people, with a mission, and a promise. 'Merehumsafar.com' is dedicated to providing you with the ultimate partner search experience and believes that no other matchmaking service can provide you with the value that merehumsafar.com can. So much so, that our service is backed by an unconditional guarantee. Please take some time to get to know us better through the links that we have provided on this page. Perhaps the information will help you decide if we are the right solution for you or somebody you know. I thank you for visiting us and hope that we can help you meet the right person.
                    </Card.Text>
                   <a href="https://in.linkedin.com/in/anupammittal007?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank">
                    <Button variant="success" src="">Learn More..</Button>
                    </a> 
                </Card.Body>
            </Card>
        </div>
    )
}

export default Aboutus