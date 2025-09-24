import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const Profile = () => {
  return (
    <Container className="my-5">
      {/* Sejarah Singkat */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4 text-primary">
            Sejarah Singkat TK Nurul Hidayah
          </h2>
          <p className="lead text-justify">
            TK Nurul Hidayah didirikan pada tahun 1996 atas keprihatinan dan
            inisiatif para tokoh pendidikan di lingkungan Kedaung Baru. Berawal
            dari sebuah keinginan luhur untuk menyediakan pendidikan anak usia
            dini yang berkualitas dan terjangkau dengan landasan nilai-nilai
            Islam, sekolah ini dirintis dengan semangat gotong royong. Dari
            sebuah bangunan sederhana, kini TK Nurul Hidayah terus tumbuh dan
            berbenah diri untuk menjadi lembaga pendidikan prasekolah yang
            terpercaya bagi masyarakat sekitar.
          </p>
        </Col>
      </Row>

      {/* Visi & Misi */}
      <Row className="mb-5">
        <Col md={6} className="mb-3 mb-md-0">
          <Card className="h-100 shadow-sm border-0">
            <Card.Body>
              <Card.Title className="text-center text-success">Visi</Card.Title>
              <Card.Text className="text-center">
                "Mewujudkan generasi penerus yang cerdas, kreatif, mandiri,
                ceria, dan berakhlak mulia sesuai dengan nilai-nilai luhur
                ajaran Islam."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body>
              <Card.Title className="text-center text-success">Misi</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  1. Menanamkan akidah dan nilai-nilai keislaman melalui
                  pembiasaan dalam kegiatan sehari-hari.
                </ListGroup.Item>
                <ListGroup.Item>
                  2. Mengembangkan seluruh potensi kecerdasan anak (kognitif,
                  bahasa, motorik, seni, dan sosial-emosional) secara optimal.
                </ListGroup.Item>
                <ListGroup.Item>
                  3. Menciptakan lingkungan belajar yang aman, nyaman, dan
                  menyenangkan (learning is fun).
                </ListGroup.Item>
                <ListGroup.Item>
                  4. Membangun kemitraan yang harmonis antara sekolah, orang
                  tua, dan masyarakat.
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Profil Guru dan Staf */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4 text-primary">
            Profil Guru dan Staf
          </h2>
          <p className="text-center text-muted mb-4">
            Untuk menampilkan foto guru, silakan letakkan file gambar (misalnya
            .jpg, .png) di folder: <br />
            <code>public/images/teachers/</code> <br />
            dengan nama file yang sesuai (contoh: <code>siti-patonah.jpg</code>
            ). Jika file tidak ditemukan, placeholder akan ditampilkan.
          </p>
          <Row className="justify-content-center g-4">
            <Col xs={6} md={4} lg={2} className="text-center">
              <Card className="h-100 shadow-sm border-0">
                {/* Ganti 'siti-patonah.jpg' dengan nama file foto Kepala Sekolah */}
                <Card.Img
                  variant="top"
                  src={
                    process.env.PUBLIC_URL + "/images/teachers/siti-patonah.jpg"
                  }
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/150x150?text=Siti+Patonah";
                  }}
                  alt="Siti Patonah"
                />
                <Card.Body>
                  <Card.Title className="fs-6">
                    Siti Patonah, S.Pd.AUD
                  </Card.Title>
                  <Card.Text className="small text-muted">
                    Kepala Sekolah
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4} lg={2} className="text-center">
              <Card className="h-100 shadow-sm border-0">
                {/* Ganti 'anisa-fitriani.jpg' dengan nama file foto Anisa Fitriani */}
                <Card.Img
                  variant="top"
                  src={
                    process.env.PUBLIC_URL +
                    "/images/teachers/anisa-fitriani.jpg"
                  }
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/150x150?text=Anisa+Fitriani";
                  }}
                  alt="Anisa Fitriani"
                />
                <Card.Body>
                  <Card.Title className="fs-6">
                    Anisa Fitriani, S.Pd.
                  </Card.Title>
                  <Card.Text className="small text-muted">
                    Guru Kelas B1
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4} lg={2} className="text-center">
              <Card className="h-100 shadow-sm border-0">
                {/* Ganti 'dewi-lestari.jpg' dengan nama file foto Dewi Lestari */}
                <Card.Img
                  variant="top"
                  src={
                    process.env.PUBLIC_URL + "/images/teachers/dewi-lestari.jpg"
                  }
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/150x150?text=Dewi+Lestari";
                  }}
                  alt="Dewi Lestari"
                />
                <Card.Body>
                  <Card.Title className="fs-6">Dewi Lestari, S.Pd.</Card.Title>
                  <Card.Text className="small text-muted">
                    Guru Kelas B2
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4} lg={2} className="text-center">
              <Card className="h-100 shadow-sm border-0">
                {/* Ganti 'nurul-hidayati.jpg' dengan nama file foto Nurul Hidayati */}
                <Card.Img
                  variant="top"
                  src={
                    process.env.PUBLIC_URL +
                    "/images/teachers/nurul-hidayati.jpg"
                  }
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/150x150?text=Nurul+Hidayati";
                  }}
                  alt="Nurul Hidayati"
                />
                <Card.Body>
                  <Card.Title className="fs-6">
                    Nurul Hidayati, A.Ma.
                  </Card.Title>
                  <Card.Text className="small text-muted">
                    Guru Kelas A
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4} lg={2} className="text-center">
              <Card className="h-100 shadow-sm border-0">
                {/* Ganti 'indah-permatasari.jpg' dengan nama file foto Indah Permatasari */}
                <Card.Img
                  variant="top"
                  src={
                    process.env.PUBLIC_URL +
                    "/images/teachers/indah-permatasari.jpg"
                  }
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/150x150?text=Indah+Permatasari";
                  }}
                  alt="Indah Permatasari"
                />
                <Card.Body>
                  <Card.Title className="fs-6">Indah Permatasari</Card.Title>
                  <Card.Text className="small text-muted">
                    Tenaga Administrasi
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Fasilitas */}
      <Row>
        <Col>
          <h2 className="text-center mb-4 text-primary">Fasilitas Kami</h2>
          <p className="text-center text-muted mb-4">
            Untuk menampilkan foto fasilitas, silakan letakkan file gambar
            (misalnya .jpg, .png) di folder: <br />
            <code>public/images/facilities/</code> <br />
            dengan nama file yang sesuai (contoh: <code>ruang-kelas.jpg</code>).
            Jika file tidak ditemukan, placeholder akan ditampilkan.
          </p>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="h-100 shadow-sm border-0">
                {/* Ganti 'ruang-kelas.jpg' dengan nama file foto Ruang Kelas */}
                <Card.Img
                  variant="top"
                  src={
                    process.env.PUBLIC_URL +
                    "/images/facilities/ruang-kelas.jpg"
                  }
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300x200?text=Ruang+Kelas";
                  }}
                  alt="Ruang Kelas"
                />
                <Card.Body>
                  <Card.Title className="text-success">
                    Ruang Kelas yang Nyaman
                  </Card.Title>
                  <Card.Text>
                    Setiap ruang kelas didesain penuh warna dengan sirkulasi
                    udara yang baik untuk menciptakan suasana belajar yang
                    kondusif.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 shadow-sm border-0">
                {/* Ganti 'area-bermain-outdoor.jpg' dengan nama file foto Area Bermain Outdoor */}
                <Card.Img
                  variant="top"
                  src={
                    process.env.PUBLIC_URL +
                    "/images/facilities/area-bermain-outdoor.jpg"
                  }
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300x200?text=Area+Bermain+Outdoor";
                  }}
                  alt="Area Bermain Outdoor"
                />
                <Card.Body>
                  <Card.Title className="text-success">
                    Area Bermain Outdoor
                  </Card.Title>
                  <Card.Text>
                    Dilengkapi dengan permainan seperti ayunan, perosotan, dan
                    jungkat-jungkit yang aman untuk melatih kemampuan motorik
                    kasar anak.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 shadow-sm border-0">
                {/* Ganti 'area-bermain-indoor.jpg' dengan nama file foto Area Bermain Indoor */}
                <Card.Img
                  variant="top"
                  src={
                    process.env.PUBLIC_URL +
                    "/images/facilities/area-bermain-indoor.jpg"
                  }
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300x200?text=Area+Bermain+Indoor";
                  }}
                  alt="Area Bermain Indoor"
                />
                <Card.Body>
                  <Card.Title className="text-success">
                    Area Bermain Indoor (Pojok Sentra)
                  </Card.Title>
                  <Card.Text>
                    Terdapat berbagai alat permainan edukatif (APE) yang
                    mendukung kegiatan belajar berbasis sentra, seperti sentra
                    balok, sentra seni, dan sentra persiapan.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 shadow-sm border-0">
                {/* Ganti 'toilet-ramah-anak.jpg' dengan nama file foto Toilet Ramah Anak */}
                <Card.Img
                  variant="top"
                  src={
                    process.env.PUBLIC_URL +
                    "/images/facilities/toilet-ramah-anak.jpg"
                  }
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300x200?text=Toilet+Ramah+Anak";
                  }}
                  alt="Toilet Ramah Anak"
                />
                <Card.Body>
                  <Card.Title className="text-success">
                    Toilet Bersih dan Ramah Anak
                  </Card.Title>
                  <Card.Text>
                    Didesain khusus sesuai ukuran anak-anak untuk melatih
                    kemandirian (toilet training).
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

export default Profile;
