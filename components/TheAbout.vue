<template>
  <div id="about">
    <div id="teams">
      <h3 class="pb-2 border-bottom  border-success section-title">Our team</h3>
      <div class="d-lg-flex flex-row justify-content-between p-5">
        <div 
          :key="index"
          v-for="(member, index) in masjid.team">
          <img
            :src="`image/teams/${member.image}`"
            class="rounded-circle"
            alt=""
            width="200"
            height="200"
            style="object-fit: cover; object-position: center"
          />
          <div class="mt-3">
            <p class="fs-3 text-center m-0 p-0 fw-bolder">{{member.name}}</p>
            <p class="fs-5 lead text-muted text-center m-0 p-0">{{member.title}}</p>
          </div>
        </div>
      </div>
    </div>
    <div id="contactus">
      <h3 class="pb-2 border-bottom border-success section-title">Reach us</h3>
      <div class="d-lg-flex flex-row justify-content-between">
        <div><p class="fs-5"><span class="fw-bold">Location:</span> <a target="_blank" :href="`${masjid.location.googleLink}`" class="text-decoration-none text-dark">{{masjid.location.streetName}}</a></p></div>
        <div>
          <p class="fs-5"><span class="fw-bold">Email:</span> {{masjid.contact.email}} </p>
          <p class="fs-5"><span class="fw-bold">Phone:</span> {{masjid.contact.phone}} </p>
        </div>
        <div>
          <div class="card card-body mt-1 bg-info">
            <a class="fs-5 text-light text-decoration-none" target="_blank" :href="`https://twitter.com/${masjid.contact.twitter}`"><i class="fa-brands fa-twitter"></i> {{masjid.contact.twitter}}</a>
          </div>
          <div class="card card-body mt-1 bg-primary">
            <a class="fs-5 text-light text-decoration-none" target="_blank" :href="`https://facebook.com/${masjid.contact.facebook}`"><i class="fa-brands fa-facebook"></i> {{masjid.contact.facebook}}</a>
          </div>
          <div class="card card-body mt-1 bg-danger">
            <a class="fs-5 text-light text-decoration-none" target="_blank" :href="`https://www.youtube.com/user/${masjid.contact.youtube}`"><i class="fa-brands fa-youtube"></i> {{masjid.contact.youtube}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({slug: String});
const slug = ref(props.slug);
const { data:masjid } = await useFetch(`/api/masjids/${slug.value}`);
</script>