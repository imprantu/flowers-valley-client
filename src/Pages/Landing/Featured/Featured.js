import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Rose from '../../Flowers/Rose/Rose';
import './Featured.css';

const Featured = () => {
    const [roses, setRoses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/roses')
            .then(res => res.json())
            .then(data => setRoses(data.slice(0, 6)));
    }, []);

    return (
        <div className="bg-light py-5">
            <Container>
                <h2 className="text-center fs-1 fw-bold text-secondary my-5">Featured Roses</h2>
                <Row xs={1} sm={1} md={2} lg={3} xl={3} className="g-5">
                    {
                        roses.map(rose => <Rose
                            key={rose._id}
                            rose={rose}
                        ></Rose>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Featured;