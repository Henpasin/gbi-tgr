<script>
export default {
  name: "NavBar",
};
</script>

<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
      <!-- Logo -->
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" alt="Logo" height="30" />
        GBI Tigaraksa
      </a>
      <!-- Daftar Menu Navigasi -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Beranda</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Tentang</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Kontak</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: rgba(0, 0, 0, 0.2);
  /* Warna latar belakang dengan opacity 0.2 */
  backdrop-filter: blur(10px);
  /* Efek blur */
  transition: background-color 0.3s, color 0.3s;
  /* Transisi perubahan warna */
}
</style>
