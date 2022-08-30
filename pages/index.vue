<template>
  <div class="container">
    <TheHeader @on-change-language="changeLanguage" />
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
const router = useRouter();

const masjidSlug = !!route.query.masjid ? route.query.masjid : "rmc";
const { data: masjids } = await useFetch(`/api/masjids`);
</script>
