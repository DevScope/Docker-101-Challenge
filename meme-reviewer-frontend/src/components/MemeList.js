import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import axios from 'axios';

const host = process.env.REACT_APP_BACKEND_HOST
    ? process.env.REACT_APP_BACKEND_HOST : 'localhost';

const port = process.env.REACT_APP_BACKEND_PORT
    ? process.env.REACT_APP_BACKEND_PORT : '5000';

export const MemeList = () => {
    const [memes, setMemes] = useState([]);

    useEffect(() => {
        const asyncCallback = async () => {
            let response = await axios.get(`http://${host}:${port}/api/meme`);
            console.log(response.data)
            return response.data
        }

        let data = asyncCallback();
        data.then(info => setMemes(info))
    }, []);

    return (
        <div>
            <nav id="navbar" class="navbar navbar-light bg-dark">
                <a title="Click here!" id="logo" class="navbar-brand" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <img src="trollface.png" width="100" height="75"  alt="" />
                </a>
                <h1 class="navbar-brand text-light">Meme Reviewer</h1>
            </nav>
            <Container>
                <Row style={{padding: '5%'}}>
                    {memes.map((meme, k) => (
                        <Col key={k} xs={12} md={5} lg={3}>
                            <Card className="text-white bg-dark mb-3">
                                <Card.Img src={meme.imagePath} />

                                <Card.Body>
                                    <Card.Title>{meme.name}</Card.Title>
                                    <Card.Text>{meme.year}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

        </div>
    )
}
