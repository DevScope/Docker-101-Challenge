import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL
    ? process.env.REACT_APP_BACKEND_URL : 'http://localhost:5000';

export const MemeList = () => {
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [memes, setMemes] = useState([]);
    const [image, setImage] = useState(null);

    useEffect(() => {
        const asyncCallback = async () => {
            let response = await axios.get(`${backendUrl}/api/meme`);
            return response.data
        }

        let data = asyncCallback();
        data.then(info => setMemes(info))
    }, [name, year, image]);

    function onNameChange(event) {
        setName(event.target.value)
    }

    function onYearChange(event) {
        setYear(event.target.value)
    }

    function onImageChange(event) {
        setImage(event.target.files[0])
    }

    function onImageUpload(e) {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('year', year);
        formData.append(
            "image",
            image
        );

        setName('');
        setYear('');
        setImage(null);
        axios.post(`${backendUrl}/api/meme`, formData);
    }

    return (
        <div>
            <nav id="navbar" class="navbar navbar-light bg-dark">
                <a title="Click here!" id="logo" class="navbar-brand" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <img src="trollface.png" width="100" height="75" alt="" />
                </a>
                <h1 class="navbar-brand text-light">Meme Reviewer</h1>
            </nav>
            <div style={{ 'display': 'block', 'paddingTop': '0.5cm', 'paddingLeft': '0.5cm', 'width': '30%' }}>
                {/* <label class="form-label" for="customFile">Upload your meme!</label> */}
                <label class="form-label" for="customName">Name</label>
                <input type="text" class="form-control" id="name" name="name" onChange={onNameChange} />
                <label class="form-label" for="customYear">Year</label>
                <input type="text" class="form-control" id="year" name="year" onChange={onYearChange} />
                <div class="input-group mb-3" style={{ 'paddingTop': '0.5cm'}}>
                    <input type="file" class="form-control" id="customFile" name="image" onChange={onImageChange} />
                    <div class="input-group-append" style={{ 'paddingLeft': '0.2cm' }}>
                        <button class="btn btn-primary" type="submit" onClick={onImageUpload}>Submit</button>
                    </div>
                </div>
            </div>
            <Container>
                <Row style={{ padding: '5%' }}>
                    {memes.map((meme, k) => (
                        <Col key={k} xs={12} md={5} lg={3}>
                            <Card className="text-white bg-dark mb-3">
                                <Card.Img src={meme.data} />

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
