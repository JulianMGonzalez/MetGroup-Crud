<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="closeOpen">
      <TransitionChild
        as="template"
        enter="ease-in-out duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="
              pointer-events-none
              fixed
              inset-y-0
              right-0
              flex
              max-w-full
              pl-10
            "
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel
                class="pointer-events-auto relative w-screen max-w-md"
              >
                <TransitionChild
                  as="template"
                  enter="ease-in-out duration-500"
                  enter-from="opacity-0"
                  enter-to="opacity-100"
                  leave="ease-in-out duration-500"
                  leave-from="opacity-100"
                  leave-to="opacity-0"
                >
                  <div
                    class="
                      absolute
                      top-0
                      left-0
                      -ml-8
                      flex
                      pt-4
                      pr-2
                      sm:-ml-10 sm:pr-4
                    "
                  >
                    <button
                      type="button"
                      class="
                        rounded-md
                        text-gray-300
                        hover:text-white
                        focus:outline-none focus:ring-2 focus:ring-white
                      "
                      @click="closeOpen"
                    >
                      <span class="sr-only">Close panel</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </TransitionChild>
                <div
                  class="
                    flex
                    h-full
                    flex-col
                    overflow-y-scroll
                    bg-white
                    py-6
                    shadow-xl
                  "
                >
                  <div class="px-4 sm:px-6">
                    <DialogTitle class="text-lg font-medium text-gray-900">
                      Add Store
                    </DialogTitle>
                  </div>
                  <div class="mt-6 flex-1 px-4 sm:px-6">
                    <!-- Replace with your content -->
                    <div class="my-4">
                      <label for="name" class="sr-only">Name</label>
                      <input
                        id="name"
                        v-model="store.name"
                        name="name"
                        type="text"
                        autocomplete="name"
                        required=""
                        class="
                          appearance-none
                          rounded-none
                          relative
                          block
                          w-full
                          px-3
                          py-2
                          border border-gray-300
                          placeholder-gray-500
                          text-gray-900
                          rounded-t-md
                          focus:outline-none
                          focus:ring-indigo-500
                          focus:border-indigo-500
                          focus:z-10
                          sm:text-sm
                        "
                        placeholder="Name"
                      />
                    </div>
                    <div class="my-4">
                      <label for="description" class="sr-only"
                        >Description</label
                      >
                      <input
                        v-model="store.description"
                        id="description"
                        name="description"
                        type="text"
                        autocomplete="description"
                        required=""
                        class="
                          appearance-none
                          rounded-none
                          relative
                          block
                          w-full
                          px-3
                          py-2
                          border border-gray-300
                          placeholder-gray-500
                          text-gray-900
                          rounded-t-md
                          focus:outline-none
                          focus:ring-indigo-500
                          focus:border-indigo-500
                          focus:z-10
                          sm:text-sm
                        "
                        placeholder="Description"
                      />
                    </div>
                    <div class="my-4">
                      <label for="image" class="sr-only">Image</label>
                      <input
                        v-model="store.image"
                        id="image"
                        name="image"
                        type="text"
                        autocomplete="image"
                        required=""
                        class="
                          appearance-none
                          rounded-none
                          relative
                          block
                          w-full
                          px-3
                          py-2
                          border border-gray-300
                          placeholder-gray-500
                          text-gray-900
                          rounded-t-md
                          focus:outline-none
                          focus:ring-indigo-500
                          focus:border-indigo-500
                          focus:z-10
                          sm:text-sm
                        "
                        placeholder="Image link"
                      />
                    </div>
                    <button
                      type="button"
                      class="
                        flex
                        items-center
                        rounded-lg
                        bg-blue-700
                        px-4
                        py-2
                        text-white
                        hover:bg-blue-900
                      "
                      @click="editStore"
                    >
                      <span
                        class="font-medium"
                        @click="conditionalCreate = true"
                      >
                        Edit Store
                      </span>
                    </button>
                    <!-- /End replace -->
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XIcon } from "@heroicons/vue/outline";

import axiosS from "@/services/store"

export default {
  components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    XIcon,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    storeItem: {
      type: Object,
      required: false,
    },
  },
  created(){
    this.StoreId = this.storeItem.id
    this.store.name = this.storeItem.name
    this.store.description = this.storeItem.description
    this.store.image = this.storeItem.image
  },
  data(){
    return {
        storeId: null,
        store: {
            name: "",
            description: "",
            image: "",
        },
    }
  },
  methods: {
    closeOpen() {
      this.$emit("closeSlider", false);
    },
    editStore() {
      const data = {
        name: this.store.name,
        description: this.store.description,
        image: this.store.image,
      };
      axiosS.storeUpdate(this.StoreId, data).then(() => {
        this.$emit("editStoreSlider", false);
      });
      this.store = {
        name: "",
        description: "",
        image: "",
      };
    },
  },
};
</script>