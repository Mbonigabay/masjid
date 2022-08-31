<template>
  <section id="services">
    <h3 class="pb-2 border-bottom">{{$t("Services")}}</h3>

    <div
      class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5"
    >
      <a
        class="col d-flex align-items-start text-decoration-none text-dark"
        @click.prevent="toggleModal(service)"
        data-toggle="modal"
        data-target="#serviceModal"
        v-for="(service, index) in services"
        :key="index"
      >
        <i
          class="bi text-muted flex-shrink-0 me-3 fa-3x"
          :class="service.icon"
          height="1.75em"
        ></i>
        <div>
          <h4 class="fw-bold mb-0">{{ $t(service.name) }}</h4>
          <p class="lead">{{ $t(service.preview) }}</p>
        </div>
      </a>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="serviceModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="serviceModalCenterTitle"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered mw-100 w-75"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title text-center" id="serviceModallLongTitle">
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
            v-if="$i18n.locale === 'kin'"
            v-html="marked.parse(modalData.description?.kin + '')"
          ></div>
          <div
            class="modal-body p-5"
            v-if="$i18n.locale === 'en'"
            v-html="marked.parse(modalData.description?.en + '')"
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
// import moment from "moment";
import { marked } from "marked";

const props = defineProps({ slug: String });
const slug = ref(props.slug);
const modalData = ref({});
const { data: services } = await useFetch(`/api/services`);
function toggleModal(event) {
  modalData.value = event;
}
</script>
