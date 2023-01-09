<template>
  <section class="mt-3" id="announcements">
    <h3 class="pb-2 border-bottom border-success section-title">{{ $t("Announcements") }}</h3>
    <div class="row mb-2">
      <div
        class="col-md-6"
        :key="index"
        v-for="(announcement, index) in announcements"
        v-show="
          announcement.masjid === slug &&
          moment(announcement.deadline).isAfter(moment(), 'day') &&
          announcement.lang === $i18n.locale
        "
      >
        <div
          class="row g-0 border rounded-0 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              @click.prevent="toggleModal(announcement)"
        >
          <div class="col p-4 d-flex flex-column position-static">
            <div>
              <p class="d-inline-flex mb-2 p-2 badge bg-success rounded-0 text-capitalize">{{
                announcement.category
              }}</p>
              </div>
            <h3 class="mb-0">{{ announcement.name }}</h3>
            <div class="mb-1 text-muted">
              <span>Posted </span>{{ moment(announcement.dateAdded).fromNow() }}
            </div>
            <p class="card-text mb-auto">
              {{ announcement.preview.substring(0, 150) + ".." }}
            </p>
            <!-- <a
              href="#"
              class="stretched-link"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              @click.prevent="toggleModal(announcement)"
              >More info...</a
            > -->
          </div>
          <div class="col-auto d-none d-lg-block">
            <img
              class="bd-placeholder-img"
              width="200"
              height="250"
              :src="`image/announcements/${announcement.imagePreview}`"
              alt=""
              style="object-fit: cover; object-position: center"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title text-center" id="exampleModalLongTitle">
              {{ modalData.name }}
            </h3>
            <button
              type="button"
              class="close btn border-0"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span class="fa-regular fa-circle-xmark fs-4" aria-hidden="true"></span>
            </button>
          </div>
          <div
            class="modal-body p-5"
            v-html="marked.parse(modalData.description + '')"
          ></div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import moment from "moment";
import { marked } from "marked";

const props = defineProps({ slug: String });
const slug = ref(props.slug);
const modalData = ref({});
const { data: announcements } = await useFetch(`/api/announcements`);
const masjidAnnouncements = announcements.value.filter(
  (a) => a.masjid === slug.value
);
function toggleModal(event) {
  modalData.value = event;
  const html = marked.parse(modalData.value.description + "");
}
</script>
