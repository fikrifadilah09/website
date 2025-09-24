import React from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container className="my-5">
      {/* Sambutan Kepala Sekolah */}
      <Row className="mb-5 align-items-center">
        <Col md={4} className="text-center mb-4 mb-md-0">
          <Image
            src={process.env.PUBLIC_URL + '/images/teachers/siti-patonah.jpg'}
            onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/200x200?text=Kepala+Sekolah" }}
            alt="Kepala Sekolah Siti Patonah"
            roundedCircle
            fluid
            style={{ maxWidth: '200px', height: 'auto' }}
          />
          <p className="text-muted mt-2 small">
            Untuk menampilkan foto Kepala Sekolah, silakan letakkan file gambar (misalnya .jpg, .png) di folder: <br/>
            <code>public/images/teachers/siti-patonah.jpg</code>
          </p>
        </Col>
        <Col md={8} className="text-center text-md-start">
          <h1 className="display-5 fw-bold text-primary">Selamat Datang di Website Resmi TK Nurul Hidayah</h1>
          <p className="mt-4 fs-6">
            Assalamu'alaikum Warahmatullahi Wabarakatuh,
            Puji syukur kehadirat Allah SWT atas segala rahmat dan karunia-Nya. Kami dengan bangga menyambut Bapak/Ibu dan para pengunjung di rumah digital kami, TK Nurul Hidayah.
            Di sini, kami berkomitmen untuk menciptakan lingkungan belajar yang hangat, aman, dan penuh kasih sayang, tempat di mana setiap anak dapat tumbuh dan berkembang menjadi generasi yang ceria, kreatif, dan berakhlak mulia. Website ini kami hadirkan sebagai jembatan informasi antara sekolah, orang tua, dan masyarakat.
            Mari bersama-sama kita antarkan putra-putri kita menuju gerbang masa depan yang gemilang.
          </p>
          <p className="mt-4 mb-0 fs-6">
            Hormat kami,<br />
            <strong>(Siti Patonah, S.Pd.AUD)</strong><br />
            Kepala Sekolah TK Nurul Hidayah
          </p>
        </Col>
      </Row>

      {/* Highlight Kegiatan & Keunggulan Sekolah */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4 text-success">Keunggulan & Kegiatan Kami</h2>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="text-primary">Pembelajaran Berbasis Sentra</Card.Title>
                  <Card.Text>
                    Kami menerapkan metode belajar yang menyenangkan dan sesuai dengan tahap perkembangan anak, fokus pada eksplorasi dan kreativitas.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="text-primary">Penanaman Nilai Islami</Card.Title>
                  <Card.Text>
                    Kegiatan harian seperti sholat Dhuha berjamaah, hafalan doa, dan pengenalan huruf hijaiyah menjadi bagian tak terpisahkan dari pendidikan karakter.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="text-primary">Lingkungan Bermain Aman & Edukatif</Card.Title>
                  <Card.Text>
                    Fasilitas bermain yang kami sediakan dirancang untuk menstimulasi motorik anak dalam lingkungan yang aman dan terawat.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="text-primary">Kegiatan Kreatif & Outing Class</Card.Title>
                  <Card.Text>
                    Secara rutin kami mengadakan kegiatan outing class dan puncak tema untuk memberikan pengalaman belajar yang nyata dan tak terlupakan bagi anak.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Jalan Pintas */}
      <Row className="text-center">
        <Col>
          <h2 className="mb-4 text-info">Jalan Pintas</h2>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <Button as={Link} to="/registration" variant="primary" size="lg" className="me-md-2">
              Daftar Sekarang
              <p className="small mb-0">Amankan kursi untuk putra-putri Anda pada tahun ajaran baru. Lihat alur, syarat, dan isi formulir pendaftarannya di sini.</p>
            </Button>
            <Button as={Link} to="/gallery" variant="outline-success" size="lg">
              Lihat Galeri
              <p className="small mb-0">Intip berbagai momen keseruan dan kreativitas anak-anak kami saat belajar dan bermain di sekolah.</p>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
