import React from "react";
import { Row, Col } from "react-bootstrap";
import services from "../services_list";
import Service from "../components/Service";

const HomeScreen = () => {
  return (
    <>
      <div
        className="text-center py-5 mb-5 rounded shadow-sm"
        style={{ backgroundColor: "#e8f7f3" }}
      >
        <h1 className="display-5 fw-bold">Vaš osmeh je naš prioritet</h1>

        <p className="lead">
          Savremena stomatološka ordinacija za pregled, popravku,
          izbeljivanje i negu zuba.
        </p>

        <a href="#usluge" className="btn btn-primary btn-lg">
          Pogledaj usluge
        </a>
      </div>

      <div className="text-center mb-4">
        <h2 id="usluge" className="fw-bold">
          Naše usluge
        </h2>
        <p className="text-muted">
          Od preventivnih pregleda do estetskih tretmana — sve za vaš osmeh.
        </p>
      </div>

      <Row>
        {services.map((service) => (
          <Col key={service._id} sm={12} md={6} lg={4} xl={3} className="mb-4">
            <Service service={service} />
          </Col>
        ))}
      </Row>

      <Row className="mt-5 text-center">
        <Col md={4} className="mb-3">
          <div
            className="p-4 rounded shadow-sm h-100"
            style={{ backgroundColor: "#e8f7f3" }}
          >
            <h5>Stručnost i iskustvo</h5>
            <p>
              Naš tim čine iskusni stomatolozi posvećeni vašem zdravlju.
            </p>
          </div>
        </Col>

        <Col md={4} className="mb-3">
          <div
            className="p-4 rounded shadow-sm h-100"
            style={{ backgroundColor: "#e8f7f3" }}
          >
            <h5>Savremena oprema</h5>
            <p>
              Koristimo moderne tehnologije za preciznu i bezbolnu terapiju.
            </p>
          </div>
        </Col>

        <Col md={4} className="mb-3">
          <div
            className="p-4 rounded shadow-sm h-100"
            style={{ backgroundColor: "#e8f7f3" }}
          >
            <h5>Fleksibilni termini</h5>
            <p>
              Prilagođavamo se vašem vremenu i omogućavamo lako zakazivanje.
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HomeScreen;