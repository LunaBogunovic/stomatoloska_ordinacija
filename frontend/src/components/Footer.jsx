import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const Footer = () => {
    // Ovo je super jer će se godina automatski menjati (2024, 2025...)
    const currentYear = new Date().getFullYear()

  return (
    <footer>
        <Container>
            <Row>
                <Col className="text-center py-3">
                    {/* Ovde samo menjamo naziv firme */}
                    <p>Stomatološka ordinacija &copy; {currentYear}. Sva prava zadržana.</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer