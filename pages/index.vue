<template>
  <div class="container">
    <TheHeader />
    <TheIntro :slug="masjidSlug" />
    <TheAnnouncement :slug="masjidSlug" />
    <TheService :slug="masjidSlug" />
    <TheProg :slug="masjidSlug" />
    <TheAbout :slug="masjidSlug" />
    <TheFooter />
  </div>
</template>

<script setup>
const route = useRoute();
const masjidSlug = !!route.query.masjid ? route.query.masjid : "rmc";
console.log("index::", masjidSlug);
</script>
