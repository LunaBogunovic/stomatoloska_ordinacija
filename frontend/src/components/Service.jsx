import React from "react";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Rating from "./Rating"; // Proveri da li si iskopirala i Rating.jsx iz skriptarnice

const Service = ({ service }) => {
    return (
        <Card className="my-3 p-3 rounded h-100 shadow-sm service-card">
            {/* Link vodi na detalje usluge */}
            <Link to={`/service/${service._id}`}>
                <Card.Img 
                    src={service.image} 
                    variant='top' 
                    style={{ height: '230px', objectFit: 'cover' }} 
                />
            </Link>

            <Card.Body>
                <Link to={`/service/${service._id}`} className="text-decoration-none">
                    <Card.Title as="div" className='product-title text-dark'>
                        <strong>{service.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div" className="my-2">
                    {/* Ovde prikazujemo ocenu usluge */}
                    <Rating value={service.rating} text={`${service.numReviews} utisaka`} />
                </Card.Text>

                <Card.Text as="h4" className="text-primary">
                    {service.price} RSD
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Service;