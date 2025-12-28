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
            TK Nurul Hidayah didirikan pada tahun 2003 atas keprihatinan dan
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
                "Mendidik anak dengan kasih sayang untuk mewujudkan pribadi yang
                mandiri, sehat, cerdas, dan kreatif serta berakhlakul karimah"
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
                  1. Menciptakan profil pelajar yang berakhlakul mulia.
                </ListGroup.Item>
                <ListGroup.Item>
                  2. Menciptakan lingkungan sekolah sebagai tempat perkembangan
                  sosial, emosional, keterampilan dan pengembangan budaya lokal
                  dalam kebhinekaan global.
                </ListGroup.Item>
                <ListGroup.Item>
                  3. Membina kemandirian peserta didik melalui kegiatan
                  pembiasaan, pengembangan diri yang terencana dan
                  berkesinambungan.
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

          <Row className="justify-content-center g-4">
            <Col xs={6} md={4} lg={2} className="text-center">
              <Card className="h-100 shadow-sm border-0">
                {/* Ganti 'siti-patonah.jpg' dengan nama file foto Kepala Sekolah */}
                <Card.Img
                  variant="top"
                  src={
                    process.env.PUBLIC_URL +
                    "/images/teachers/kepala_sekolah.png"
                  }
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/150x150?text=Siti+Patonah";
                  }}
                  alt="Siti Patonah"
                />
                <Card.Body>
                  <Card.Title className="fs-6">Siti Rokamah, S.pd.I</Card.Title>
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
                  src={process.env.PUBLIC_URL + "/images/teachers/guru_1.png"}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/150x150?text=Anisa+Fitriani";
                  }}
                  alt="Anisa Fitriani"
                />
                <Card.Body>
                  <Card.Title className="fs-6">
                    Hikmah Wulandari, S.Pd.
                  </Card.Title>
                  <Card.Text className="small text-muted">Guru</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4} lg={2} className="text-center">
              <Card className="h-100 shadow-sm border-0">
                {/* Ganti 'dewi-lestari.jpg' dengan nama file foto Dewi Lestari */}
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/images/teachers/guru_2.png"}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/150x150?text=Dewi+Lestari";
                  }}
                  alt="Dewi Lestari"
                />
                <Card.Body>
                  <Card.Title className="fs-6">Komariah</Card.Title>
                  <Card.Text className="small text-muted">Guru</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4} lg={2} className="text-center">
              <Card className="h-100 shadow-sm border-0">
                {/* Ganti 'nurul-hidayati.jpg' dengan nama file foto Nurul Hidayati */}
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/images/teachers/guru_3.png"}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/150x150?text=Nurul+Hidayati";
                  }}
                  alt="Nurul Hidayati"
                />
                <Card.Body>
                  <Card.Title className="fs-6">
                    Yunita Anggraini, S.Pd
                  </Card.Title>
                  <Card.Text className="small text-muted">Guru</Card.Text>
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
