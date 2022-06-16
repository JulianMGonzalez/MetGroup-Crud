<template>
  <div
    class="
      container
      px-4
      mx-auto
      relative
      overflow-x-auto
      shadow-md
      sm:rounded-lg
    "
  >
    <div class="p-4">
      <h1 class="text-2xl font-medium text-slate-600 pb-2">Tiendas del Usuario Numero {{$route.params.id}}</h1>
    </div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="
          text-xs text-gray-700
          uppercase
          bg-gray-50
          dark:bg-gray-700 dark:text-gray-400
        "
      >
        <tr>
          <th scope="col" class="p-4">
            <div class="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                class="
                  w-4
                  h-4
                  text-blue-600
                  bg-gray-100
                  border-gray-300
                  rounded
                  focus:ring-blue-500
                  dark:focus:ring-blue-600 dark:ring-offset-gray-800
                  focus:ring-2
                  dark:bg-gray-700 dark:border-gray-600
                "
              />
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </th>
          <th scope="col" class="px-6 py-3">Id</th>
          <th scope="col" class="px-6 py-3">Product name</th>
          <th scope="col" class="px-6 py-3">description</th>
          <th scope="col" class="px-6 py-3">Image</th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in articles"
          :key="item.id"
          class="
            bg-white
            border-b
            dark:bg-gray-800 dark:border-gray-700
            hover:bg-gray-50
            dark:hover:bg-gray-600
          "
        >
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input
                id="checkbox-table-search-1"
                type="checkbox"
                class="
                  w-4
                  h-4
                  text-blue-600
                  bg-gray-100
                  border-gray-300
                  rounded
                  focus:ring-blue-500
                  dark:focus:ring-blue-600 dark:ring-offset-gray-800
                  focus:ring-2
                  dark:bg-gray-700 dark:border-gray-600
                "
              />
              <label for="checkbox-table-search-1" class="sr-only"
                >checkbox</label
              >
            </div>
          </td>
          <th
            scope="row"
            class="
              px-6
              py-4
              font-medium
              text-gray-900
              dark:text-white
              whitespace-nowrap
            "
          >
            {{ item.id }}
          </th>
          <td class="px-6 py-4">{{ item.name }}</td>
          <td class="px-6 py-4">{{ item.description }}</td>
          <td class="px-6 py-4">
            <div class="w-12 h-12">
              <img
                class="rounded-full border border-gray-100 shadow-sm"
                :src="item.image"
                alt="product"
              />
            </div>
          </td>
          <td class="px-6 py-4 text-right">
            <router-link
              :to="{ name: 'store-view', params: { id: item.id } }"
              class="
                font-medium
                text-blue-600
                dark:text-blue-500
                hover:underline
                mx-2
              "
              ><EyeIcon class="w-4 text-green-500" aria-hidden="true"
            /></router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { EyeIcon } from "@heroicons/vue/outline";
import axiosU from "@/services/user";
export default {
  components: {
    EyeIcon,
  },
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    axiosU.userListId(this.$route.params.id).then((res) => {
      this.articles = res.data.stores;
    });
  },
};
</script>

<style>
</style>