<template>
  <section id="programs">
    <div id="custom-cards">
      <h3 class="pb-2 border-bottom">Programs</h3>

      <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <a
          class="col text-decoration-none"
          :key="index"
          v-for="(program, index) in programs"
          v-show="program.masjid === slug"
          data-toggle="modal"
          data-target="#programModalCenter"
          @click.prevent="toggleModal(program)"
        >
          <div
            class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            :style="{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(' +
                `image/programs/${program.image}` +
                ')',
            }"
            style="
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
            "
          >
            <div
              class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
            >
              <h4 class="mb-4 display-6 lh-1 fw-bold">
                {{ program.name }}
              </h4>
              <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                  {{ program.preview }}
                </li>
                <li class="d-flex align-items-center me-3"></li>
                <li class="d-flex align-items-center">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use xlink:href="#calendar3"></use>
                  </svg>
                  <small>{{ program.reoccurence + " " + program.time }} </small>
                </li>
              </ul>
            </div>
          </div>
        </a>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="programModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="programModalCenterTitle"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered mw-100 w-75"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title text-center" id="programModalLongTitle">
              {{ modalData.name }}
            </h3>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
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
import { marked } from "marked";

const props = defineProps({ slug: String });
const slug = ref(props.slug);
const modalData = ref({});
const { data: programs } = await useFetch(`/api/programs`);
function toggleModal(event) {
  modalData.value = event;
  const html = marked.parse(modalData.value.description + "");
}
</script>
