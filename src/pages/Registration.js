import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Form, Button, Alert } from 'react-bootstrap';

const Registration = () => {
  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdfRJs08PvJUo_z9fNRzdNvCQHlSSnII8FCPdzgVxPori-rpw/formResponse";

  // State to manage form data
  const [formData, setFormData] = useState({
    namaAnak: '',
    tanggalLahir: '', // YYYY-MM-DD format
    namaAyah: '',
    namaIbu: '',
    emailOrtu: '',
    nomorTelepon: '',
    alamat: '',
    kelompok: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Google Form entry IDs
  const GOOGLE_FORM_ENTRIES = {
    namaAnak: 'entry.688833762',
    tanggalLahirDay: 'entry.1495689311_day',
    tanggalLahirMonth: 'entry.1495689311_month',
    tanggalLahirYear: 'entry.1495689311_year',
    namaAyah: 'entry.172128471',
    namaIbu: 'entry.23544563',
    emailOrtu: 'entry.584026051',
    nomorTelepon: 'entry.1126620840',
    alamat: 'entry.1490828397',
    kelompok: 'entry.966239896',
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Prepare data for Google Form submission
    const data = new FormData();
    data.append(GOOGLE_FORM_ENTRIES.namaAnak, formData.namaAnak);

    // Handle date separately
    if (formData.tanggalLahir) {
      const [year, month, day] = formData.tanggalLahir.split('-');
      data.append(GOOGLE_FORM_ENTRIES.tanggalLahirDay, day);
      data.append(GOOGLE_FORM_ENTRIES.tanggalLahirMonth, month);
      data.append(GOOGLE_FORM_ENTRIES.tanggalLahirYear, year);
    }

    data.append(GOOGLE_FORM_ENTRIES.namaAyah, formData.namaAyah);
    data.append(GOOGLE_FORM_ENTRIES.namaIbu, formData.namaIbu);
    data.append(GOOGLE_FORM_ENTRIES.emailOrtu, formData.emailOrtu);
    data.append(GOOGLE_FORM_ENTRIES.nomorTelepon, formData.nomorTelepon);
    data.append(GOOGLE_FORM_ENTRIES.alamat, formData.alamat);
    data.append(GOOGLE_FORM_ENTRIES.kelompok, formData.kelompok);

    try {
      // Using fetch to submit to Google Form
      // Google Forms typically redirect, so we use 'no-cors' mode
      // This means we won't get a direct success/error response in React,
      // but the form will be submitted.
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for cross-origin Google Form submission
        body: data,
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Terjadi kesalahan saat mengirim pendaftaran. Mohon coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="my-5">
      {/* Alur Pendaftaran */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4 text-primary">Alur Pendaftaran</h2>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item><strong>1. Pengambilan Formulir:</strong> Orang tua mengambil formulir pendaftaran di sekolah atau mengunduh melalui website.</ListGroup.Item>
                <ListGroup.Item><strong>2. Pengembalian Formulir:</strong> Mengembalikan formulir yang telah diisi lengkap beserta dokumen persyaratan.</ListGroup.Item>
                <ListGroup.Item><strong>3. Wawancara & Observasi:</strong> Wawancara singkat dengan orang tua dan observasi kesiapan belajar anak (bukan tes calistung).</ListGroup.Item>
                <ListGroup.Item><strong>4. Daftar Ulang:</strong> Melakukan pembayaran administrasi dan menyelesaikan proses daftar ulang.</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Syarat & Ketentuan */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4 text-primary">Syarat & Ketentuan</h2>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title className="text-success">Usia Calon Siswa (per Juli [Tahun Ajaran]):</Card.Title>
              <ul>
                <li>Kelompok A: Minimal 4 Tahun</li>
                <li>Kelompok B: Minimal 5 Tahun</li>
              </ul>
              <Card.Title className="text-success">Dokumen yang Dibutuhkan:</Card.Title>
              <ul>
                <li>Mengisi Formulir Pendaftaran</li>
                <li>Fotokopi Akta Kelahiran (2 lembar)</li>
                <li>Fotokopi Kartu Keluarga (2 lembar)</li>
                <li>Pas Foto Anak ukuran 3x4 (2 lembar)</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Informasi Biaya */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4 text-primary">Informasi Biaya</h2>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Text className="lead">
                Untuk rincian biaya pendidikan Tahun Ajaran 2026/2027, silakan hubungi panitia Pendaftaran Peserta Didik Baru (PPDB) kami melalui telepon atau datang langsung ke sekolah pada jam kerja.
              </Card.Text>
              <Card.Title className="text-success">Komponen biaya umumnya terdiri dari:</Card.Title>
              <ul>
                <li>Uang Formulir: [Contoh: Rp 150.000]</li>
                <li>Uang Pangkal / Pembangunan: (Dibayarkan satu kali selama menjadi siswa)</li>
                <li>SPP Bulanan: (Termasuk kegiatan belajar harian)</li>
                <li>Uang Kegiatan Tahunan: (Untuk mendukung kegiatan outing class, puncak tema, dll)</li>
                <li>Biaya Seragam: (Mencakup beberapa setel seragam)</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Formulir Pendaftaran Online */}
      <Row>
        <Col>
          <h2 className="text-center mb-4 text-primary">Formulir Pendaftaran Online</h2>
          <Card className="shadow-sm border-0 p-4">
            {isSubmitted ? (
              <Alert variant="success" className="text-center">
                <Alert.Heading>Pendaftaran Berhasil Dikirim!</Alert.Heading>
                <p>Terima kasih telah mendaftar. Data Anda telah kami terima.</p>
                <hr />
                <p className="mb-0">
                  **Segera hubungi admin sekolah atau datang langsung ke TK Nurul Hidayah** untuk langkah selanjutnya dalam proses pendaftaran.
                </p>
              </Alert>
            ) : (
              <Form onSubmit={handleSubmit}>
                {error && <Alert variant="danger">{error}</Alert>}
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="namaAnak">
                    <Form.Label>Nama Lengkap Anak</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukkan nama lengkap anak"
                      value={formData.namaAnak}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="tanggalLahir">
                    <Form.Label>Tanggal Lahir Anak</Form.Label>
                    <Form.Control
                      type="date"
                      value={formData.tanggalLahir}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="namaAyah">
                    <Form.Label>Nama Lengkap Ayah</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukkan nama lengkap ayah"
                      value={formData.namaAyah}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="namaIbu">
                    <Form.Label>Nama Lengkap Ibu</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukkan nama lengkap ibu"
                      value={formData.namaIbu}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="emailOrtu">
                  <Form.Label>Email Orang Tua</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Masukkan email aktif"
                    value={formData.emailOrtu}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="nomorTelepon">
                  <Form.Label>Nomor Telepon/WhatsApp</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Contoh: 081234567890"
                    value={formData.nomorTelepon}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="alamat">
                  <Form.Label>Alamat Lengkap</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Masukkan alamat lengkap"
                    value={formData.alamat}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="kelompok">
                  <Form.Label>Pilih Kelompok</Form.Label>
                  <Form.Select
                    value={formData.kelompok}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Pilih...</option>
                    <option value="Kelompok A">Kelompok A (Usia 4 Tahun)</option>
                    <option value="Kelompok B">Kelompok B (Usia 5 Tahun)</option>
                  </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit" disabled={isLoading}>
                  {isLoading ? 'Mengirim...' : 'Kirim Pendaftaran'}
                </Button>
              </Form>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;
