<script>
export default {
  name: "CarouselHomePage",
};
</script>

<template>
  <!-- Carousel -->
  <div
    id="carouselExampleIndicators"
    class="carousel slide mx-auto w-100"
    data-bs-ride="carousel"
    data-bs-interval="3000"
    style="margin-top: 0; height: 100vh"
  >
    <div class="carousel-inner" style="height: 100%">
      <div class="carousel-item active">
        <img
          class="d-block w-100 img-fluid"
          src="../assets/a.jpg"
          alt="First slide"
          style="object-fit: cover; height: 100%"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100 img-fluid"
          src="../assets/b.jpg"
          alt="Second slide"
          style="object-fit: cover; height: 100%"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100 img-fluid"
          src="../assets/c.jpg"
          alt="Third slide"
          style="object-fit: cover; height: 100%"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100 img-fluid"
          src="../assets/1.jpg"
          alt="four slide"
          style="object-fit: cover; height: 100%"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100 img-fluid"
          src="../assets/2.jpg"
          alt="five slide"
          style="object-fit: cover; height: 100%"
        />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </a>

    <!-- Thumbnails -->
    <div
      class="carousel-indicators mt-3"
      style="display: flex; justify-content: center"
    >
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-label="Thumbnail 1"
      >
        <img
          class="d-block img-fluid"
          src="../assets/a.jpg"
          alt="Thumbnail 1"
          style="width: 100px; height: 80px; object-fit: cover"
        />
      </button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Thumbnail 2"
      >
        <img
          class="d-block img-fluid"
          src="../assets/b.jpg"
          alt="Thumbnail 2"
          style="width: 100px; height: 80px; object-fit: cover"
        />
      </button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Thumbnail 3"
      >
        <img
          class="d-block img-fluid"
          src="../assets/c.jpg"
          alt="Thumbnail 3"
          style="width: 100px; height: 80px; object-fit: cover"
        />
      </button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="3"
        aria-label="Thumbnail 4"
      >
        <img
          class="d-block img-fluid"
          src="../assets/1.jpg"
          alt="Thumbnail 4"
          style="width: 100px; height: 80px; object-fit: cover"
        />
      </button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="4"
        aria-label="Thumbnail 5"
      >
        <img
          class="d-block img-fluid"
          src="../assets/2.jpg"
          alt="Thumbnail 5"
          style="width: 100px; height: 80px; object-fit: cover"
        />
      </button>
    </div>
  </div>
</template>

<style>
.carousel-indicators {
  bottom: 65px;
}

.carousel-indicators button {
  width: 100px !important;
}
</style>
