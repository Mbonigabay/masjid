<template>
  <section class="mt-3" id="library">
    <h3 class="pb-2 border-bottom border-success section-title">
      {{ $t("Library") }}
    </h3>
    <div class="d-flex flex-row justify-content-start gap-5 flex-wrap">
      <div
        class="card"
        @click.prevent="toggleModal(book)"
        data-toggle="modal"
        data-target="#libraryModal"
        v-for="(book, index) in library"
        :key="index"
      >
        <img
          :src="`image/library/${book.cover}`"
          class="card-img-top"
        />
        <div class="card-body">
          <div class="card-text">
            <h3>{{ book.title }}</h3>
            <small class="text-muted">{{ book.author }}</small>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="libraryModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="libraryModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title text-center" id="libraryModallLongTitle">
                {{ $t("Library") }}
            </h3>
            <button
              type="button"
              class="close btn border-0"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span
                class="fa-regular fa-circle-xmark fs-4"
                aria-hidden="true"
              ></span>
            </button>
          </div>
          <div class="modal-body p-5">
            <div class="row">
              <div class="col-md-12">
                <h1>{{ modalData.title }}</h1>
              </div>
              <div class="col-md-6">
                <img
                :src="`image/library/${modalData.cover}`"
                  class="rounded"
                  style="width: 100%; height: 15vw; object-fit: cover;"
                />
              </div>
              <div class="col-md-6">
                <div>
                  <span style="font-weight:bold">{{ $t("Title") }}:</span>
                  <p>{{modalData.title}}</p>
                </div>
                <div>
                  <span style="font-weight:bold">{{ $t("Author") }}:</span>
                  <p>{{modalData.author}}</p>
                </div>
                <div>
                  <span style="font-weight:bold">ISBN:</span>
                  <p>{{modalData.isbn}}</p>
                </div>
                <div>
                  <span style="font-weight:bold">{{ $t("Publisher") }}:</span>
                  <p>{{modalData.publisher}}</p>
                </div>
                <div>
                  <span style="font-weight:bold">{{ $t("Pages") }}:</span>
                  <p>{{modalData.pages}}</p>
                </div>
                <div>
                  <span style="font-weight:bold">{{ $t("Publication Date") }}:</span>
                  <p>{{modalData.publicationDate}}</p>
                </div>
              </div>
              <div class="col-md-12">
                <h3>{{ $t("Description") }}</h3>
                <p>
                    {{modalData.description}}
                </p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="https://drive.google.com/file/d/1fdUtRAjQ0As5P6aLp4mcMUoz3uPwLeXu/view?usp=sharing" target="_blank">
              <button type="button" class="btn btn-secondary">{{ $t("Read Book") }}</button>
            </a>
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
const { data: library } = await useFetch(`/api/library`);
function toggleModal(event) {
  modalData.value = event;
console.log("event::", event);
}
</script>
<style scoped>
.card {
  width: 18rem;
}
.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}
</style>