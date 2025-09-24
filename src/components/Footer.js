import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const phoneNumber = "089601572717";
  const emailAddress = "info.tknurulhidayah.tng@gmail.com";

  return (
    <footer className="bg-light text-center text-lg-start mt-5 py-4">
      <Container>
        <Row className="justify-content-center">
          <Col md={4} className="mb-3">
            <h5 className="text-primary">TK Nurul Hidayah</h5>
            <p className="small">
              Jl. Kedaung Baru, Kedaung Baru, Kecamatan Neglasari, Kota Tangerang, Banten 15128, Indonesia.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5 className="text-primary">Hubungi Kami</h5>
            <p className="small">
              Telepon/WhatsApp: <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
              <br />
              Email: <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5 className="text-primary">Lokasi Kami</h5>
            <div className="ratio ratio-16x9" style={{ height: '150px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63472.17201335253!2d106.54815912167969!3d-6.129254799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a0129006b3c75%3A0x10d53c59e90042f2!2sRA%20Nurul%20Hidayah!5e0!3m2!1sid!2sid!4v1758702618899!5m2!1sid!2sid"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi TK Nurul Hidayah"
              ></iframe>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <div className="text-center p-3 bg-light small">
              © 2025 TK Nurul Hidayah. All rights reserved.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
