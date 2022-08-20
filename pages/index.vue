<template>
  <div class="container">
    <TheHeader />
    <TheIntro :slug="masjidSlug"/>
    <TheAnnouncement  :slug="masjidSlug"/>
    <section id="services">
      <div class="px-4 py-5" id="icon-grid">
        <h3 class="pb-2 border-bottom">Services</h3>

        <div
          class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5"
        >
          <div class="col d-flex align-items-start">
            <svg
              class="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlink:href="#bootstrap"></use>
            </svg>
            <div>
              <h4 class="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <svg
              class="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlink:href="#cpu-fill"></use>
            </svg>
            <div>
              <h4 class="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <svg
              class="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlink:href="#calendar3"></use>
            </svg>
            <div>
              <h4 class="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <svg
              class="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlink:href="#home"></use>
            </svg>
            <div>
              <h4 class="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <svg
              class="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlink:href="#speedometer2"></use>
            </svg>
            <div>
              <h4 class="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <svg
              class="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlink:href="#toggles2"></use>
            </svg>
            <div>
              <h4 class="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <svg
              class="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlink:href="#geo-fill"></use>
            </svg>
            <div>
              <h4 class="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <svg
              class="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlink:href="#tools"></use>
            </svg>
            <div>
              <h4 class="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="programs">
      <div class="px-4 py-5" id="custom-cards">
        <h2 class="pb-2 border-bottom">Programs</h2>

        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div class="col">
            <div
              class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style="background-image: url('unsplash-photo-1.jpg')"
            >
              <div
                class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
              >
                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Short title, long jacket
                </h2>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <img
                      src="https://github.com/twbs.png"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      class="rounded-circle border border-white"
                    />
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em">
                      <use xlink:href="#geo-fill"></use>
                    </svg>
                    <small>Earth</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em">
                      <use xlink:href="#calendar3"></use>
                    </svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col">
            <div
              class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style="background-image: url('unsplash-photo-2.jpg')"
            >
              <div
                class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
              >
                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Much longer title that wraps to multiple lines
                </h2>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <img
                      src="https://github.com/twbs.png"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      class="rounded-circle border border-white"
                    />
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em">
                      <use xlink:href="#geo-fill"></use>
                    </svg>
                    <small>Pakistan</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em">
                      <use xlink:href="#calendar3"></use>
                    </svg>
                    <small>4d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col">
            <div
              class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style="background-image: url('unsplash-photo-3.jpg')"
            >
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Another longer title belongs here
                </h2>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <img
                      src="https://github.com/twbs.png"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      class="rounded-circle border border-white"
                    />
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em">
                      <use xlink:href="#geo-fill"></use>
                    </svg>
                    <small>California</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em">
                      <use xlink:href="#calendar3"></use>
                    </svg>
                    <small>5d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
