<template>
  <div class="container">
    <TheHeader />
    <TheIntro :slug="masjidSlug" />
    <TheAnnouncement :slug="masjidSlug" />
    <TheService :slug="masjidSlug" />
    <TheProg :slug="masjidSlug" />
    <TheLibrary :slug="masjidSlug"/>
    <TheAbout :slug="masjidSlug" />
    <TheFooter />
  </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

const masjidSlug = !!route.query.masjid ? route.query.masjid : "kicukiro-gasharu";
const { data: masjids } = await useFetch(`/api/masjids`);
</script>
