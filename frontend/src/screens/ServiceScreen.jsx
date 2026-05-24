import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import {
    Form,
    Row,
    Col,
    Image,
    Card,
    Button,
    Badge,
} from 'react-bootstrap';

import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';

import { useGetProductDetailsQuery } from '../slices/productsApiSlice';
import { addToCart } from '../slices/cartSlice';

import { useDispatch } from 'react-redux';

const ServiceScreen = () => {
    const { id: serviceId } = useParams();

    const [qty, setQty] = useState(1);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        data: service,
        isLoading,
        error,
    } = useGetProductDetailsQuery(serviceId);

    const addToAppointmentHandler = () => {
        dispatch(addToCart({ ...service, qty }));
        navigate('/appointment');
    };

    return (
        <>
            <Link className='btn btn-outline-secondary mb-4' to='/'>
                ← Nazad
            </Link>

            {isLoading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>
                    {error?.data?.message || error.error}
                </Message>
            ) : (
                <>
                    <Card className='border-0 shadow-sm p-4 mb-4'>
                        <Row className='align-items-center'>
                            <Col md={8}>
                                <h2 className='mb-2'>{service.name}</h2>

                                <Rating
                                    value={service.rating}
                                    text={`${service.numReviews} recenzija`}
                                />
                            </Col>

                            <Col
                                md={4}
                                className='text-md-end mt-3 mt-md-0'
                            >
                                <h3 className='text-primary mb-0'>
                                    {service?.price?.toFixed(2)} RSD
                                </h3>
                            </Col>
                        </Row>
                    </Card>

                    <Row className='gy-4'>
                        <Col lg={8}>
                            <Card className='border-0 shadow-sm p-4'>
                                <div className='text-center'>
                                    <Image
                                        src={service.image}
                                        alt={service.name}
                                        fluid
                                        style={{
                                            maxHeight: '500px',
                                            objectFit: 'contain',
                                        }}
                                    />
                                </div>
                            </Card>
                        </Col>

                        <Col lg={4}>
                            <Card className='border-0 shadow-sm'>
                                <Card.Body>
                                    <h4 className='mb-4'>
                                        Informacije o usluzi
                                    </h4>

                                    <div className='d-flex justify-content-between mb-3'>
                                        <span>Kategorija:</span>
                                        {service.category}
                                    </div>

                                    <div className='d-flex justify-content-between align-items-center mb-4'>
                                        <span>Status:</span>

                                        {service.countInStock > 0 ? (
                                            <Badge bg='success'>
                                                Slobodan termin
                                            </Badge>
                                        ) : (
                                            <Badge bg='danger'>
                                                Nema termina
                                            </Badge>
                                        )}
                                    </div>

                                    {service.countInStock > 0 && (
                                        <div className='d-flex justify-content-between align-items-center mb-4'>
                                            <span>Broj termina:</span>

                                            <Form.Control
                                                as='select'
                                                value={qty}
                                                onChange={(e) =>
                                                    setQty(
                                                        Number(e.target.value)
                                                    )
                                                }
                                                style={{
                                                    width: '90px',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                {[...Array(
                                                    service.countInStock
                                                ).keys()].map((x) => (
                                                    <option
                                                        key={x + 1}
                                                        value={x + 1}
                                                    >
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </div>
                                    )}

                                    <div className='d-grid'>
                                        <Button
                                            type='button'
                                            disabled={
                                                service.countInStock === 0
                                            }
                                            onClick={
                                                addToAppointmentHandler
                                            }
                                        >
                                            Zakaži termin
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Card className='border-0 shadow-sm mt-4'>
                        <Card.Body>
                            <h4 className='mb-3'>Opis usluge</h4>

                            <p className='text-muted mb-0'>
                                {service.description}
                            </p>
                        </Card.Body>
                    </Card>
                </>
            )}
        </>
    );
};

export default ServiceScreen;