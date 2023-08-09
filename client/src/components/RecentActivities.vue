<script>
export default {
  name: "RecentActivities",
};
</script>

<template>
  <div class="container mt-4">
    <div style="display: flex; align-items: center; margin-bottom: 10px">
      <h2 class="mb-0">Recent Activities</h2>
      <hr
        style="
          flex-grow: 1;
          border: none;
          border-top: 2px solid #04021f;
          margin-right: 10px;
        "
      />
    </div>
    <div class="row">
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card">
            <div id="carousel1" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="../assets/a.jpg" class="card-RA" alt="Image 1" />
                </div>
                <div class="carousel-item">
                  <img src="../assets/b.jpg" class="card-RA" alt="Image 2" />
                </div>
                <div class="carousel-item">
                  <img src="../assets/c.jpg" class="card-RA" alt="Image 3" />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carousel1"
                role="button"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carousel1"
                role="button"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </a>
            </div>
            <div class="card-body text-center">
              <h5 class="card-title">Beautiful Scenery</h5>
              <p class="card-text">Enjoy the breathtaking view of nature.</p>
            </div>
          </div>
        </div>
        <!-- Add more similar card columns here -->
        <div class="col-md-4 mb-4">
          <div class="card">
            <div id="carousel1" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="../assets/a.jpg" class="card-RA" alt="Image 1" />
                </div>
                <div class="carousel-item">
                  <img src="../assets/b.jpg" class="card-RA" alt="Image 2" />
                </div>
                <div class="carousel-item">
                  <img src="../assets/c.jpg" class="card-RA" alt="Image 3" />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carousel1"
                role="button"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carousel1"
                role="button"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </a>
            </div>
            <div class="card-body text-center">
              <h5 class="card-title">Beautiful Scenery</h5>
              <p class="card-text">Enjoy the breathtaking view of nature.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card">
            <div id="carousel1" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="../assets/1.jpg" class="card-RA" alt="Image 1" />
                </div>
                <div class="carousel-item">
                  <img src="../assets/b.jpg" class="card-RA" alt="Image 2" />
                </div>
                <div class="carousel-item">
                  <img src="../assets/c.jpg" class="card-RA" alt="Image 3" />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carousel1"
                role="button"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carousel1"
                role="button"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </a>
            </div>
            <div class="card-body text-center">
              <h5 class="card-title">Beautiful Scenery</h5>
              <p class="card-text">Enjoy the breathtaking view of nature.</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Add more cards here -->
    </div>
  </div>
</template>

<style>
.card-RA {
  height: 300px;
  /* Ukuran gambar tetap */
  object-fit: cover;
  /* Memastikan gambar mengisi area tanpa distorsi */
}
</style>
