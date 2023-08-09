<script>
export default {
  name: "CardInformation",
};
</script>

<template>
  <!-- Menu Card Informasi -->
  <div class="container my-4">
    <div style="display: flex; align-items: center; margin-bottom: 10px">
      <h2 class="mb-0">Card Informasi</h2>
      <hr
        style="
          flex-grow: 1;
          border: none;
          border-top: 2px solid #04021f;
          margin-right: 10px;
        "
      />
    </div>
    <div class="row overflow-auto">
      <div class="col-md-4 mb-4">
        <div class="card card-hover">
          <img
            src="../assets/baner1.jpg"
            height="420"
            width="200"
            class="card-img-top img-darkened"
            alt="Card Image 1"
          />
          <h1
            class="card-title position-absolute top-50 start-50 translate-middle text-center"
            style="color: white"
          >
            YOUTH
          </h1>
          <div class="card-details text-center border border-2 border-dark">
            <h5 class="mb-0">Details Youth</h5>
            <hr />
            <div class="text-start">
              <p class="mb-0">Ketua Departemen :</p>
              <p class="mb-0">Ibadah Jam :</p>
              <p>
                description : untuk anak muda yang cinta akan Tuhan mari
                bersama-sama memuji Tuhan
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Repeat the above col-md-4 div for other cards -->
      <div class="col-md-4 mb-4">
        <div class="card card-hover">
          <img
            src="../assets/baner1.jpg"
            height="420"
            width="200"
            class="card-img-top img-darkened"
            alt="Card Image 1"
          />
          <h1
            class="card-title position-absolute top-50 start-50 translate-middle text-center"
            style="color: white"
          >
            WOMEN
          </h1>
          <div class="card-details text-center border border-2 border-dark">
            <h5 class="mb-0">Details Youth</h5>
            <hr />
            <div class="text-start">
              <p class="mb-0">Ketua Departemen :</p>
              <p class="mb-0">Ibadah Jam :</p>
              <p>
                description : untuk anak muda yang cinta akan Tuhan mari
                bersama-sama memuji Tuhan
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card card-hover">
          <img
            src="../assets/baner1.jpg"
            height="420"
            width="200"
            class="card-img-top img-darkened"
            alt="Card Image 1"
          />
          <h1
            class="card-title position-absolute top-50 start-50 translate-middle text-center"
            style="color: white"
          >
            KIDS
          </h1>
          <div class="card-details text-center border border-2 border-dark">
            <h5 class="mb-0">Details Youth</h5>
            <hr />
            <div class="text-start">
              <p class="mb-0">Ketua Departemen :</p>
              <p class="mb-0">Ibadah Jam :</p>
              <p>
                description : untuk anak muda yang cinta akan Tuhan mari
                bersama-sama memuji Tuhan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* New style for card hover effect */
.card-hover:hover .card-details {
  display: block;
}

.card-details {
  display: none;
}

.card-hover:hover .card-details {
  display: block;
}

.card-details {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
  text-align: center;
}

.img-darkened {
  filter: brightness(70%);
  /* Ubah nilai brightness sesuai keinginan */
}
</style>
