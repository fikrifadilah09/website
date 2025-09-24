import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const News = () => {
  const newsItems = [
    {
      title: "Pendaftaran Siswa Baru Tahun Ajaran 2026/2027 Telah Dibuka!",
      content: "Kabar gembira! TK Nurul Hidayah secara resmi telah membuka Pendaftaran Peserta Didik Baru (PPDB) untuk tahun ajaran 2026/2027. Kunjungi halaman pendaftaran kami untuk informasi alur dan persyaratannya.",
      date: "24 September 2025",
    },
    {
      title: "Serunya Puncak Tema \"Dunia Binatang\" dengan Kunjungan ke Mini Zoo",
      content: "Sebagai puncak tema pembelajaran tentang binatang, siswa-siswi kami melakukan kunjungan edukatif ke Mini Zoo. Anak-anak sangat antusias melihat dan belajar tentang berbagai jenis hewan secara langsung.",
      date: "15 September 2025",
    },
  ];

  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center text-primary">Berita & Pengumuman Terbaru</h2>
        </Col>
      </Row>

      <Row className="g-4">
        {newsItems.map((item, index) => (
          <Col md={6} key={index}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="text-success">{item.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted small">{item.date}</Card.Subtitle>
                <Card.Text>
                  {item.content}
                </Card.Text>
                {/* <Card.Link href="#">Baca Selengkapnya</Card.Link> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default News;