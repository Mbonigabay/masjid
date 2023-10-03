<template>
  <header
    class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom border-success fixed-top container"
    style="background-color: white"
  >
    <a
      href="/"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
      id="logo"
    >
      <img class="navbar-brand" src="/image/masdjid-logo.png" alt="logo" height="40"/>
    </a>

    <ul ref="menu" id="menu" class="nav nav-pills">
      <li class="nav-item">
        <a href="#intro" class="nav-link text-dark">{{ $t("Home") }}</a>
      </li>
      <!-- <li class="nav-item dropdown">
        <a
          href="#"
          class="nav-link dropdown-toggle text-dark"
          role="button"
          data-toggle="dropdown"
          aria-expanded="false"
          >{{ $t("Masjids") }}</a
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
      </li> -->
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
        <a href="#library" class="nav-link text-dark">{{ $t("Library") }}</a>
      </li>
      <li class="nav-item">
        <a href="#about" class="nav-link text-dark">{{ $t("About us") }}</a>
      </li>
      <li>
        <div class="select-container">
          <select class="select-box" v-model="$i18n.locale">
            <option disabled>{{ $t("Change Language") }}:</option>
            <option value="en">English</option>
            <option value="kin">Kinyarwanda</option>
          </select>
          <div class="icon-container">
            <i class="fa-solid fa-caret-down"></i>
          </div>
        </div>
      </li>
    </ul>
    <div id="mobile-menu" class="mx-3 my-2" @click="toggleMenu"><i class="fa-solid fa-bars fs-4"></i></div>
  </header>
</template>
<script setup>
import { ref } from "vue";

const route = useRoute();
const router = useRouter();
const masjid = !!route.query.masjid ? route.query.masjid : "rmc";
let menu = ref(null);
const { data: masjids } = await useFetch(`/api/masjids`);

function toggleMenu(event){
  if(menu.value.style.display === '' || menu.value.style.display === 'none'){
    menu.value.style.display = 'inline-block';
    return;
  }

  if(menu.value.style.display === 'inline-block'){
    menu.value.style.display = 'none';
    return;
  }
}
</script>

<style>
#logo {
  color: var(--color-green) !important;
}
.nav-item .nav-link:hover{
  color: var(--color-green) !important;
}
ul.nav li.dropdown:hover > ul.dropdown-menu {
  display: block;
}
@media (min-width: 979px) {
  ul.nav li.dropdown:hover > ul.dropdown-menu {
    display: block;
  }
}

.select-container {
  display: flex;
  justify-content: center;
  position: relative;
  min-width: 100px;
  height: 30px;
  margin-top: 5px;
}

.select-box {
  border: none;
  appearance: none;
  padding: 0 15px 0 10px;
  width: 100%;
  color: white;
  background-color: var(--color-green);
  font-size: 15px;
}

.select-container .icon-container {
  width: 25px;
  height: 100%;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-green-darker);
  pointer-events: none;
}

.icon-container i {
  font-size: 15px;
  color: white;
}
</style>
