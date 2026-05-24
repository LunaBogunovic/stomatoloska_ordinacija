import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import Message from '../components/Message';
import CheckoutSteps from '../components/CheckoutSteps';
import Loader from '../components/Loader';

import { useCreateAppointmentMutation } from '../slices/appointmentsApiSlice';
import { clearAppointmentItems } from '../slices/appointmentSlice';

const ConfirmAppointmentScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const appointment = useSelector((state) => state.appointment);

  const [createAppointment, { isLoading, error }] =
    useCreateAppointmentMutation();

  useEffect(() => {
    if (!appointment.patientInfo?.address) {
      navigate('/patient-info');
    } else if (!appointment.paymentMethod) {
      navigate('/payment');
    }
  }, [appointment.patientInfo, appointment.paymentMethod, navigate]);

  const confirmAppointmentHandler = async () => {
    try {
      const res = await createAppointment({
        appointmentItems: appointment.appointmentItems,
        patientInfo: appointment.patientInfo,
        paymentMethod: appointment.paymentMethod,
        itemsPrice: appointment.itemsPrice,
        additionalPrice: appointment.additionalPrice,
        taxPrice: appointment.taxPrice,
        totalPrice: appointment.totalPrice,
      }).unwrap();

      dispatch(clearAppointmentItems());

      navigate(`/appointment/${res._id}`);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />

      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Podaci pacijenta</h2>
              <p>
                <strong>Adresa: </strong>
                {appointment.patientInfo.address},{' '}
                {appointment.patientInfo.city}{' '}
                {appointment.patientInfo.postalCode},{' '}
                {appointment.patientInfo.country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Način plaćanja</h2>
              <p>{appointment.paymentMethod}</p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Izabrane usluge</h2>

              {appointment.appointmentItems.length === 0 ? (
                <Message>Niste izabrali nijednu uslugu</Message>
              ) : (
                <ListGroup variant="flush">
                  {appointment.appointmentItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>

                        <Col>
                          <Link to={`/service/${item._id}`}>
                            {item.name}
                          </Link>
                        </Col>

                        <Col md={4}>
                          {item.qty} x {item.price} RSD ={' '}
                          {item.qty * item.price} RSD
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Pregled termina</h2>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Usluge</Col>
                  <Col>{appointment.itemsPrice} RSD</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Dodatni troškovi</Col>
                  <Col>{appointment.additionalPrice} RSD</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Porez</Col>
                  <Col>{appointment.taxPrice} RSD</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Ukupno</Col>
                  <Col>{appointment.totalPrice} RSD</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                {error && (
                  <Message variant="danger">
                    {error?.data?.message || error.error}
                  </Message>
                )}
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={appointment.appointmentItems.length === 0}
                  onClick={confirmAppointmentHandler}
                >
                  Potvrdite termin
                </Button>

                {isLoading && <Loader />}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ConfirmAppointmentScreen;