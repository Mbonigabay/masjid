<template>
  <section id="intro">
    <div class="my-5">
      <div
        class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg"
      >
        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-4 fw-bold lh-1">
            {{$t(masjid.name)}}
            <br><span class="display-6 muted fst-italic">{{masjid.location.district}}</span>
          </h1>
          <p class="lead">
            {{masjid.description[`${$i18n.locale}`]}}
          </p>
        </div>
        <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg" id="intro-image">
          <img
            class="rounded-lg-3"
            :src="`image/masjids/${masjid.image}`"
            alt=""
            width="720"
            object-fit="fill"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({slug: String});
const slug = ref(props.slug);
const { data:masjid } = await useFetch(`/api/masjids/${slug.value}`);
</script>
