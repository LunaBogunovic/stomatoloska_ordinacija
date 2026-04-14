import React from "react";
import { Row, Col } from "react-bootstrap";
import services from "../services_list"; // Promenjeno ime fajla
import Service from "../components/Service"; // Promenjeno iz Product u Service

const HomeScreen = () => {
    return (
        <>
            <h1>Naše Usluge</h1>
            <Row>
                {services.map((service) => (
                    <Col key={service._id} sm={12} md={6} lg={4} xl={3}>
                        <Service service={service} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default HomeScreen;