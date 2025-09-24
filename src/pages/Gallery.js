import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Gallery = () => {
  const placeholderImages = [
    "https://via.placeholder.com/400x300?text=Kegiatan+Belajar+1",
    "https://via.placeholder.com/400x300?text=Kegiatan+Bermain+2",
    "https://via.placeholder.com/400x300?text=Pentas+Seni+3",
    "https://via.placeholder.com/400x300?text=Outing+Class+4",
    "https://via.placeholder.com/400x300?text=Perayaan+Hari+Besar+5",
    "https://via.placeholder.com/400x300?text=Eksplorasi+6",
  ];

  const placeholderVideos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0", // Example placeholder video
    "https://www.youtube.com/embed/M7lc1UVf-VE?controls=0", // Another example
  ];

  return (
    <Container className="my-5">
      {/* Deskripsi Umum Galeri */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4 text-primary">Galeri Kenangan TK Nurul Hidayah</h2>
          <p className="lead text-justify">
            Selamat datang di galeri kenangan TK Nurul Hidayah! Di halaman ini, kami berbagi momen-momen berharga dari berbagai kegiatan belajar dan bermain anak-anak. Anda dapat melihat keceriaan mereka saat mengikuti kegiatan di dalam kelas, keseruan saat bermain di luar ruangan, hingga antusiasme pada acara-acara khusus seperti pentas seni, perayaan hari besar, dan kunjungan edukatif. Semoga galeri ini dapat memberikan gambaran tentang lingkungan belajar yang positif dan menyenangkan di sekolah kami.
          </p>
        </Col>
      </Row>

      {/* Galeri Foto */}
      <Row className="mb-5">
        <Col>
          <h3 className="text-center mb-4 text-success">Momen Foto Kami</h3>
          <Row className="g-4">
            {placeholderImages.map((src, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Img variant="top" src={src} alt={`Galeri Foto ${index + 1}`} />
                  <Card.Body>
                    <Card.Text className="text-muted">Deskripsi singkat foto {index + 1}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Galeri Video */}
      <Row>
        <Col>
          <h3 className="text-center mb-4 text-success">Video Kegiatan</h3>
          <Row className="g-4 justify-content-center">
            {placeholderVideos.map((src, index) => (
              <Col md={8} lg={6} key={index}>
                <div className="ratio ratio-16x9 shadow-sm">
                  <iframe
                    src={src}
                    title={`Video Kegiatan ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-center text-muted mt-2">Deskripsi singkat video {index + 1}</p>
              </Col>
            ))}
          </Row>
          <p className="text-center mt-4 text-muted">
            *Video di atas adalah placeholder. Jika Anda memiliki tautan video YouTube atau platform lain, kami dapat mengintegrasikannya di sini.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;