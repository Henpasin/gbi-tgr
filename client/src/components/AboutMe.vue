<script>
export default {
  name: "AboutMe",
};
</script>

<template>
  <!-- About Me Content -->
  <div class="container my-5">
    <div class="row">
      <div class="col-md-6">
        <!-- Google Maps -->
        <div
          style="
            text-decoration: none;
            overflow: hidden;
            max-width: 100%;
            width: 650px;
            height: 300px;
          "
        >
          <div
            id="display-google-map"
            style="height: 100%; width: 100%; max-width: 100%"
          >
            <iframe
              style="height: 100%; width: 100%; border: 0"
              frameborder="0"
              src="https://www.google.com/maps/embed/v1/place?q=GBI+TIGARAKSA,+Jalan+M.+Atik+Soeardia,+Kadu+Agung,+Tangerang+Regency,+Banten,+Indonesia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            ></iframe>
          </div>
          <a
            class="embed-ded-maphtml"
            href="https://www.bootstrapskins.com/themes"
            id="authorize-map-data"
            >premium bootstrap themes</a
          >
        </div>
      </div>
      <div class="col-md-6">
        <!-- Your About Me Text -->
        <div style="display: flex; align-items: center; margin-bottom: 10px">
          <h2 class="mb-0">About</h2>
          <hr
            style="
              flex-grow: 1;
              border: none;
              border-top: 2px solid #04021f;
              margin-right: 10px;
            "
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Sed fringilla dui id quam fermentum, non vulputate tellus
          blandit. Sed eu ex a elit mattis dapibus. Curabitur a mi at tortor
          dignissim hendrerit eget nec nulla.
        </p>
        <p>
          Phasellus nec erat id libero cursus laoreet. Pellentesque at sem in
          nisi efficitur pharetra eu et nunc. Vivamus facilisis scelerisque
          justo non aliquet. Ut in neque in mauris interdum rhoncus vel a urna.
        </p>
      </div>
    </div>
  </div>
</template>
