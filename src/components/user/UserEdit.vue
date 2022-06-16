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
                      Add User
                    </DialogTitle>
                  </div>
                  <div class="mt-6 flex-1 px-4 sm:px-6">
                    <!-- Replace with your content -->
                    <div class="my-4">
                      <label for="name" class="sr-only">Name</label>
                      <input
                        id="name"
                        v-model="user.name"
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
                      <label for="last_name" class="sr-only"
                        >last_name</label
                      >
                      <input
                        v-model="user.last_name"
                        id="last_name"
                        name="last_name"
                        type="text"
                        autocomplete="last_name"
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
                        placeholder="last_name"
                      />
                    </div>
                    <div class="my-4">
                      <label for="email" class="sr-only">email</label>
                      <input
                        v-model="user.email"
                        id="email"
                        name="email"
                        type="text"
                        autocomplete="email"
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
                        placeholder="email"
                      />
                    </div>
                    <div class="my-4">
                      <label for="password" class="sr-only">password</label>
                      <input
                        v-model="user.password"
                        id="password"
                        name="password"
                        type="password"
                        autocomplete="off"
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
                        placeholder="*****"
                      />
                    </div>
                    <div class="my-4">
                      <label for="avatar" class="sr-only">avatar</label>
                      <input
                        v-model="user.avatar"
                        id="avatar"
                        name="avatar"
                        type="text"
                        autocomplete="off"
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
                        placeholder="avatar url"
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
                      @click="editUser"
                    >
                      <span
                        class="font-medium"
                        @click="conditionalCreate = true"
                      >
                        Edit User
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

import axiosU from "@/services/user"

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
    userItem: {
      type: Object,
      required: false,
    },
  },
  created(){
    this.userId = this.userItem.id
    this.user.name = this.userItem.name
    this.user.last_name = this.userItem.last_name
    this.user.email = this.userItem.email
    this.user.password = this.userItem.password
    this.user.avatar = this.userItem.avatar
  },
  data(){
    return {
        userId: null,
        user: {
            name: "",
            last_name: "",
            email: "",
            password: "",
            avatar: "",
        },
    }
  },
  methods: {
    closeOpen() {
      this.$emit("closeSlider", false);
    },
    editUser() {
      const data = {
        name: this.user.name,
        last_name: this.user.last_name,
        email: this.user.email,
        password: this.user.password,
        avatar: this.user.avatar,
      };
      axiosU.userUpdate(this.userId, data).then(() => {
        this.$emit("editUserSlider", false);
      });
      this.user = {
        name: "",
        last_name: "",
        email: "",
        password: "",
        avatar: "",
      };
    },
  },
};
</script>