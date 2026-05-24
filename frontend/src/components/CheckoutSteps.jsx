import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>Prijava</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Prijava</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/appointment">
            <Nav.Link>Zakazivanje</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Zakazivanje</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/patient-info">
            <Nav.Link>Podaci pacijenta</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Podaci pacijenta</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/confirmation">
            <Nav.Link>Potvrda termina</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Potvrda termina</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;