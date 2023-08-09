<script>
export default {
  name: "ListCool",
};
</script>

<template>
  <!-- Menu Card Cool -->
  <div class="container mt-5">
    <div class="row">
      <div style="display: flex; align-items: center; margin-bottom: 10px">
        <h2 class="mb-0">Community Of Love</h2>
        <hr
          style="
            flex-grow: 1;
            border: none;
            border-top: 2px solid #04021f;
            margin-right: 10px;
          "
        />
      </div>
    </div>
    <!-- search -->
    <div class="row">
      <div class="col-md-12 text-center">
        <!-- Search Form -->
        <form class="d-flex justify-content-center mb-4">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
    </div>

    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col" style="width: 5%; text-align: center">No</th>
          <th scope="col" style="width: 20%">Nama Cool</th>
          <th scope="col" style="width: 20%">Ketua Cool</th>
          <th scope="col" style="width: 40%">Alamat</th>
          <th scope="col" style="width: 12%; text-align: center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" style="text-align: center">1</th>
          <td>One Heart</td>
          <td>Jhon Doe</td>
          <td>Puri Permai</td>
          <td style="text-align: center">
            <button class="btn btn-primary">Lihat Alamat</button>
          </td>
        </tr>
        <tr>
          <th scope="row" style="text-align: center">2</th>
          <td>One Heart</td>
          <td>Jhon Doe</td>
          <td>Puri Permai</td>
          <td style="text-align: center">
            <button class="btn btn-primary">Lihat Alamat</button>
          </td>
        </tr>
        <tr>
          <th scope="row" style="text-align: center">3</th>
          <td>One Heart</td>
          <td>Jhon Doe</td>
          <td>Puri Permai</td>
          <td style="text-align: center">
            <button class="btn btn-primary">Lihat Alamat</button>
          </td>
        </tr>
        <tr>
          <th scope="row" style="text-align: center">4</th>
          <td>One Heart</td>
          <td>Jhon Doe</td>
          <td>Puri Permai</td>
          <td style="text-align: center">
            <button class="btn btn-primary">Lihat Alamat</button>
          </td>
        </tr>
        <tr>
          <th scope="row" style="text-align: center">5</th>
          <td>One Heart</td>
          <td>Jhon Doe</td>
          <td>Puri Permai</td>
          <td style="text-align: center">
            <button class="btn btn-primary">Lihat Alamat</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- More card list rows here -->

    <!-- Pagination -->
    <div class="row mt-4">
      <div class="col">
        <nav aria-label="Page navigation">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
                >Previous</a
              >
            </li>
            <li class="page-item active" aria-current="page">
              <a class="page-link" href="#"
                >1 <span class="visually-hidden">(current)</span></a
              >
            </li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
