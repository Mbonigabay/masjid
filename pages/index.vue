<template>
  <div class="container">
    <TheHeader />
    <TheIntro :slug="masjidSlug"/>
    <TheAnnouncement  :slug="masjidSlug"/>
    <TheService :slug="masjidSlug" />
    <TheProg :slug="masjidSlug" />
    <section id="teams">
      <h3>Our team</h3>
      <h3>Contact us</h3>
    </section>
    <footer>
      <div class="">
        <footer
          class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
        >
          <div class="col-md-4 d-flex align-items-center">
            <a
              href="/"
              class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <svg class="bi" width="30" height="24">
                <use xlink:href="#bootstrap"></use>
              </svg>
            </a>
            <span class="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a class="text-muted" href="#"
                ><svg class="bi" width="24" height="24">
                  <use xlink:href="#twitter"></use></svg
              ></a>
            </li>
            <li class="ms-3">
              <a class="text-muted" href="#"
                ><svg class="bi" width="24" height="24">
                  <use xlink:href="#instagram"></use></svg
              ></a>
            </li>
            <li class="ms-3">
              <a class="text-muted" href="#"
                ><svg class="bi" width="24" height="24">
                  <use xlink:href="#facebook"></use></svg
              ></a>
            </li>
          </ul>
        </footer>
      </div>
    </footer>
  </div>
</template>
<script setup>
const route = useRoute();
const masjidSlug = !!route.query.masjid ? route.query.masjid : "rmc";
console.log("index::", masjidSlug);
</script>
