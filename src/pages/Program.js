import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const Program = () => {
  return (
    <Container className="my-5">
      {/* Kurikulum */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4 text-primary">Kurikulum Kami</h2>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Text className="lead text-justify">
                TK Nurul Hidayah mengimplementasikan Kurikulum Merdeka yang dipadukan dengan pendekatan pembelajaran berbasis sentra dan penguatan nilai-nilai keislaman. Fokus kami adalah pada "Merdeka Belajar, Merdeka Bermain", di mana anak-anak didorong untuk bereksplorasi sesuai minat dan bakatnya. Pembelajaran mencakup enam aspek pengembangan utama: Nilai Agama dan Budi Pekerti, Jati Diri, Dasar-Dasar Literasi & STEAM, serta Keterampilan Motorik dan Seni.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Kegiatan Belajar-Mengajar Harian */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4 text-primary">Kegiatan Belajar-Mengajar Harian</h2>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title className="text-success">Contoh Jadwal Harian</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item><strong>07:30 - 08:00:</strong> Ikrar, Baris-berbaris, dan Senam Pagi</ListGroup.Item>
                <ListGroup.Item><strong>08:00 - 08:30:</strong> Circle Time (Doa, Hafalan Surat Pendek, Bernyanyi)</ListGroup.Item>
                <ListGroup.Item><strong>08:30 - 09:30:</strong> Kegiatan Inti di Sentra (Belajar Sambil Bermain)</ListGroup.Item>
                <ListGroup.Item><strong>09:30 - 10:00:</strong> Istirahat, Cuci Tangan, dan Makan Bekal Bersama</ListGroup.Item>
                <ListGroup.Item><strong>10:00 - 10:45:</strong> Kegiatan Penutup (Membaca Cerita, Kegiatan Kreatif, atau Bermain Bebas)</ListGroup.Item>
                <ListGroup.Item><strong>10:45 - 11:00:</strong> Persiapan Pulang dan Doa</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Ekstrakurikuler */}
      <Row>
        <Col>
          <h2 className="text-center mb-4 text-primary">Ekstrakurikuler</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="text-success">Iqra / Tahsin</Card.Title>
                  <Card.Text>
                    Pengenalan huruf hijaiyah dan dasar-dasar membaca Al-Qur'an dengan metode yang menyenangkan.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="text-success">Menggambar dan Mewarnai</Card.Title>
                  <Card.Text>
                    Mengasah kreativitas, imajinasi, dan kemampuan motorik halus anak melalui kegiatan seni visual.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="text-success">Menari</Card.Title>
                  <Card.Text>
                    Melatih kepercayaan diri, ekspresi, dan koordinasi gerak tubuh melalui tarian-tarian lagu anak daerah dan modern.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Program;