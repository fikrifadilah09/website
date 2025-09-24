import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center text-primary">Hubungi Kami</h2>
          <p className="lead text-center">
            Untuk informasi lebih lanjut, silakan hubungi kami melalui detail kontak di bagian bawah halaman (footer) atau kunjungi sekolah kami.
          </p>
          {/* Di sini bisa ditambahkan formulir kontak atau informasi lain yang lebih spesifik */}
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
