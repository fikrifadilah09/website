import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Gallery = () => {
  const activityImages = [
    {
      src: "/images/facilities/makan_bersama.jpeg",
      description: "Makan Bersama",
    },
    {
      src: "/images/facilities/senam_apel_pagi.jpeg",
      description: "Senam Apel Pagi",
    },
    {
      src: "/images/facilities/bermain.jpeg",
      description: "Bermain",
    },
    {
      src: "/images/facilities/praktek_ibadah.jpeg",
      description: "Praktek Ibadah",
    },
    {
      src: "/images/facilities/belajar_dikelas.jpeg",
      description: "Belajar di Kelas"
    },

  ];

  const placeholderVideos = [
    {
      src: "/videos/kegiatan_1.mp4",
      description: "Video Kegiatan 1",
    },
    {
      src: "/videos/kegiatan_2.mp4",
      description: "Video Kegiatan 2",
    },
  ];

  useEffect(() => {
    document.title = 'Galeri - TK Nurul Hidayah';
  }, []);

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
            {activityImages.map((image, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Img variant="top" src={image.src} alt={image.description} />
                  <Card.Body>
                    <Card.Text className="text-muted">{image.description}</Card.Text>
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
            {placeholderVideos.map((video, index) => (
              <Col md={8} lg={6} key={index}>
                <div className="ratio ratio-16x9 shadow-sm">
                  <video controls>
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="text-center text-muted mt-2">{video.description}</p>
              </Col>
            ))}
          </Row>
          <p className="text-center mt-4 text-muted">
            *Video di atas adalah contoh. Unggah video Anda dalam format .mp4 ke dalam folder <code>public/videos</code> dan perbarui daftar video di <code>src/pages/Gallery.js</code> untuk menampilkannya di sini.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;