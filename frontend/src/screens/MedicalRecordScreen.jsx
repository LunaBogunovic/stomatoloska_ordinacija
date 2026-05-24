import { Card, Row, Col, Table, Badge } from 'react-bootstrap';

const MedicalRecordScreen = () => {
  return (
    <>
      <h1 className="mb-4">Moj karton</h1>

      <Row className="mb-4">
        <Col md={6}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h4>Podaci pacijenta</h4>

              <p>
                <strong>Ime:</strong> Marko Marković
              </p>

              <p>
                <strong>Broj kartona:</strong> 2024-115
              </p>

              <p>
                <strong>Status:</strong>{' '}
                <Badge bg="success">Aktivan</Badge>
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h4>Naredni termin</h4>

              <p>15.06.2026. u 14:30h</p>

              <p>Kontrolni pregled i čišćenje kamenca</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="shadow-sm border-0 mb-4">
        <Card.Body>
          <h4>Istorija pregleda i intervencija</h4>

          <Table striped hover responsive className="mt-3">
            <thead>
              <tr>
                <th>Datum</th>
                <th>Intervencija</th>
                <th>Stomatolog</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>10.05.2026.</td>
                <td>Popravka zuba</td>
                <td>Dr Ana Petrović</td>
                <td>
                  <Badge bg="success">Završeno</Badge>
                </td>
              </tr>

              <tr>
                <td>18.04.2026.</td>
                <td>Izbeljivanje zuba</td>
                <td>Dr Luka Jovanović</td>
                <td>
                  <Badge bg="success">Završeno</Badge>
                </td>
              </tr>

              <tr>
                <td>02.03.2026.</td>
                <td>Osnovni pregled</td>
                <td>Dr Ana Petrović</td>
                <td>
                  <Badge bg="success">Završeno</Badge>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Card className="shadow-sm border-0">
        <Card.Body>
          <h4>Preporuke stomatologa</h4>

          <p className="mt-3">
            Preporučuje se redovna kontrola na svakih 6 meseci,
            profesionalno uklanjanje kamenca i korišćenje
            paste za osetljive zube.
          </p>
        </Card.Body>
      </Card>
    </>
  );
};

export default MedicalRecordScreen;