<template>
  <div  class="mt-3" id="about">
    <div id="teams">
      <h3 class="pb-2 border-bottom border-success section-title">
        {{ $t("Our Comittee") }}
      </h3>
      <div class="d-lg-flex flex-row justify-content-between flex-sm-wrap">
        <div
          :key="index"
          v-for="(member, index) in masjid.team"
          class="d-flex flex-column justify-content-center text-center mt-5 p-2"
        >
          <div>
            <img
              :src="`image/teams/${member.image}`"
              class="rounded-circle"
              alt=""
              width="200"
              height="200"
              style="object-fit: cover; object-position: center"
            />
          </div>
          <div class="mt-3">
            <p class="fs-3 text-center m-0 p-0 fw-bolder">{{ member.name }}</p>
            <p class="fs-5 lead text-muted text-center m-0 p-0">
              {{ member.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5" id="contactus">
      <h3 class="pb-2 border-bottom border-success section-title">
        {{ $t("Reach us") }}
      </h3>
      <div class="d-lg-flex flex-row justify-content-between">
        <div>
          <p class="fs-5 m-0 p-0">
            <span class="fw-bold">Location: </span>
            <a
              target="_blank"
              :href="`${masjid.location.googleLink}`"
              class="text-dark"
              >{{ masjid.location.streetName }}</a
            >
          </p>
          <small class="text-muted"
            ><i class="fa-solid fa-circle-info"></i>
            {{ $t("click on the location for more info") }}</small
          >
        </div>
        <div>
          <p class="fs-5">
            <span class="fw-bold">Email:</span> {{ masjid.contact.email }}
          </p>
          <p class="fs-5">
            <span class="fw-bold">Phone:</span> {{ masjid.contact.phone }}
          </p>
        </div>
        <div>
          <div v-show="!!masjid.contact.twitter" class="fs-5"> 
            <a
              class="text-dark text-decoration-none"
              target="_blank"
              :href="`https://twitter.com/${masjid.contact.twitter}`"
              ><i class="fa-brands fa-twitter" style="color: #00acee"></i>
              {{ masjid.contact.twitter }}</a
            >
          </div>
          <div v-show="!!masjid.contact.facebook" class="fs-5">
            <a
              class="text-dark text-decoration-none"
              target="_blank"
              :href="`https://facebook.com/${masjid.contact.facebook}`"
              ><i class="fa-brands fa-facebook" style="color: #3b5998"></i>
              {{ masjid.contact.facebook }}</a
            >
          </div>
          <div v-show="!!masjid.contact.youtube"  class="fs-5">
            <a
              class="text-dark text-decoration-none"
              target="_blank"
              :href="`https://www.youtube.com/@${masjid.contact.youtube}`"
              ><i class="fa-brands fa-youtube" style="color: #FF0000"></i>
              {{ masjid.contact.youtube }}</a
            >
          </div>
          <div v-show="!!masjid.contact.instagram"  class="fs-5">
            <a
              class="text-dark text-decoration-none"
              target="_blank"
              :href="`https://www.instagram.com/${masjid.contact.instagram}`"
              ><i class="fa-brands fa-instagram"  style="color: #8a3ab9"></i>
              {{ masjid.contact.instagram }}</a
            >
          </div>
          <div v-show="!!masjid.contact.tiktok"  class="fs-5">
            <a
              class="text-dark text-decoration-none"
              target="_blank"
              :href="`https://www.tiktok.com/@${masjid.contact.tiktok}`"
              ><i class="fa-brands fa-tiktok"  style="color: #8a3ab9"></i>
              {{ masjid.contact.instagram }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({ slug: String });
const slug = ref(props.slug);
const { data: masjid } = await useFetch(`/api/masjids/${slug.value}`);
</script>