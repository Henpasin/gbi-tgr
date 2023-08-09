<script>
export default {
  name: "CardAgenda",
};
</script>

<template>
  <!-- Menu Card Agenda -->
  <div class="container mt-4 card-container mb-4">
    <div style="display: flex; align-items: center; margin-bottom: 10px">
      <h2 class="mb-0">Agenda</h2>
      <hr
        style="
          flex-grow: 1;
          border: none;
          border-top: 2px solid #04021f;
          margin-right: 10px;
        "
      />
    </div>
    <div class="card mb-3">
      <div class="row g-0">
        <!-- Bagian Tanggal -->
        <div
          class="col-md-2 d-flex flex-column align-items-center justify-content-center bg-light"
        >
          <h1 class="fw-bold">12</h1>
          <a>Agustus 2023</a>
        </div>
        <!-- Bagian Judul dan Deskripsi -->
        <div class="col-md-10">
          <div class="card-body">
            <h5 class="card-title">Judul Event</h5>
            <p class="card-text">Deskripsi singkat tentang event ini.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-3">
      <div class="row g-0">
        <!-- Bagian Tanggal -->
        <div
          class="col-md-2 d-flex flex-column align-items-center justify-content-center bg-light"
        >
          <h1 class="fw-bold">12</h1>
          <a>Agustus 2023</a>
        </div>

        <!-- Bagian Judul dan Deskripsi -->
        <div class="col-md-10">
          <div class="card-body">
            <h5 class="card-title">Judul Event</h5>
            <p class="card-text">Deskripsi singkat tentang event ini.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-3">
      <div class="row g-0">
        <!-- Bagian Tanggal -->
        <div
          class="col-md-2 d-flex flex-column align-items-center justify-content-center bg-light"
        >
          <h1 class="fw-bold">12</h1>
          <a>Agustus 2023</a>
        </div>
        <!-- Bagian Judul dan Deskripsi -->
        <div class="col-md-10">
          <div class="card-body">
            <h5 class="card-title">Judul Event</h5>
            <p class="card-text">Deskripsi singkat tentang event ini.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card-container {
  max-height: 300px;
  /* Atur tinggi maksimum kontainer */
  overflow-y: auto;
  /* Tambahkan pengguliran (scroll) jika konten melebihi tinggi maksimum */
}
</style>
