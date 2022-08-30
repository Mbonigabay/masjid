<template>
  <header
    class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom fixed-top container"
    style="background-color: white"
  >
    <a
      href="/"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
    >
      <i class="fa-solid fa-mosque"></i>
      <span class="fs-4">masjid.rw</span>
    </a>

    <ul class="nav nav-pills">
      <li class="nav-item">
        <a href="#intro" class="nav-link text-dark">{{ $t("Home") }}</a>
      </li>
      <li class="nav-item dropdown">
        <a
          href="#"
          class="nav-link dropdown-toggle text-dark"
          role="button"
          data-toggle="dropdown"
          aria-expanded="false"
          >Masjids</a
        >
        <ul class="dropdown-menu">
          <li :key="index" v-for="(masjid, index) in masjids">
            <a
              class="dropdown-item"
              :href="`https://masjids-rw.netlify.app/?masjid=${masjid.slug}`"
              >{{ masjid.name }}</a
            >
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a href="#announcements" class="nav-link text-dark">{{
          $t("Announcements")
        }}</a>
      </li>
      <li class="nav-item">
        <a href="#services" class="nav-link text-dark">{{ $t("Services") }}</a>
      </li>
      <li class="nav-item">
        <a href="#programs" class="nav-link text-dark">{{ $t("Programs") }}</a>
      </li>
      <li class="nav-item">
        <a href="#about" class="nav-link text-dark">{{ $t("About us") }}</a>
      </li>
      <li>
        <select class="form-select" v-model="$i18n.locale">
          <option selected>{{ $t("Change Language") }}:</option>
          <option value="en">English</option>
          <option value="kin">Kinyarwanda</option>
        </select>
      </li>
    </ul>
  </header>
</template>
<script setup>
const route = useRoute();
const router = useRouter();
const masjid = !!route.query.masjid ? route.query.masjid : "rmc";
const { data: masjids } = await useFetch(`/api/masjids`);
</script>

<style>
ul.nav li.dropdown:hover > ul.dropdown-menu {
  display: block;
}
@media (min-width: 979px) {
  ul.nav li.dropdown:hover > ul.dropdown-menu {
    display: block;
  }
}
</style>
