import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

import Message from '../components/Message';

import {
  addToAppointment,
  removeFromAppointment,
} from '../slices/appointmentSlice';

const AppointmentScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const appointment = useSelector((state) => state.appointment);
  const { appointmentItems } = appointment;

  const addToAppointmentHandler = (service, qty) => {
    dispatch(addToAppointment({ ...service, qty }));
  };

  const removeFromAppointmentHandler = (id) => {
    dispatch(removeFromAppointment(id));
  };

  const appointmentHandler = () => {
    navigate('/patient-info'); // ovde dodati /login?redirect= ispred /patient kad se doda backend
  };

  return (
    <Row>
      <Col md={8}>
        <h1 style={{ marginBottom: '20px' }}>Zakazivanje termina</h1>

        {appointmentItems.length === 0 ? (
          <Message>
            Niste izabrali nijednu uslugu. <Link to="/">Vrati se nazad</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {appointmentItems.map((item) => (
              <ListGroup.Item key={item._id}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>

                  <Col md={3}>
                    <Link to={`/service/${item._id}`}>{item.name}</Link>
                  </Col>

                  <Col md={2}>{item.price.toFixed(2)} RSD</Col>

                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        addToAppointmentHandler(item, Number(e.target.value))
                      }
                    >
                      <option value={1}>1</option>
                    </Form.Control>
                  </Col>

                  <Col md={2}>
                    <Button
                      variant="light"
                      onClick={() => removeFromAppointmentHandler(item._id)}
                    >
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>

      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Izabrane usluge: {appointmentItems.length}</h2>
              Ukupno:{' '}
              {appointmentItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}{' '}
              RSD
            </ListGroup.Item>

            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={appointmentItems.length === 0}
                onClick={appointmentHandler}
              >
                Nastavi zakazivanje
              </Button>
              <Form.Group className="my-3">
  <Form.Label>Datum termina</Form.Label>

  <Form.Control type="date" />
</Form.Group>

<Form.Group className="my-3">
  <Form.Label>Vreme termina</Form.Label>
  <Form.Select> 
    <option>09:00</option>
    <option>10:30</option>
    <option>12:00</option>
    <option>14:00</option>
    <option>16:00</option>
  </Form.Select>
</Form.Group>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default AppointmentScreen;