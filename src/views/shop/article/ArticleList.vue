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
    <div class="flex justify-between my-2">
      <div>
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative mt-1">
          <div
            class="
              absolute
              inset-y-0
              left-0
              flex
              items-center
              pl-3
              pointer-events-none
            "
          >
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            class="
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded-lg
              focus:ring-blue-500 focus:border-blue-500
              block
              w-80
              pl-10
              p-2.5
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
            placeholder="Search for items"
          />
        </div>
      </div>
      <div class="flex justify-end my-1">
        <button
        v-if="isLoggedIn"
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
        >
          <span class="font-medium" @click="conditionalCreate = true">
            Add Article
          </span>
        </button>
      </div>
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
          v-for="item in article"
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
          <div v-if="isLoggedIn">
            <td class="px-6 py-4 text-right flex">
              <router-link
                :to="{ name: 'article-view', params: { id: item.id } }"
                class="
                  font-medium
                  text-blue-600
                  dark:text-blue-500
                  hover:underline
                  mx-2
                "
                ><EyeIcon class="w-4 text-green-500" aria-hidden="true"
              /></router-link>
              <button
                class="
                  font-medium
                  text-blue-600
                  dark:text-blue-500
                  hover:underline
                  mx-2
                "
                @click="assignStore(item.id)"
              >
                <PlusIcon class="w-4" aria-hidden="true" />
              </button>
              <button
                class="
                  font-medium
                  text-blue-600
                  dark:text-blue-500
                  hover:underline
                  mx-2
                "
                @click="editItem(item)"
              >
                <PencilIcon class="w-4" aria-hidden="true" />
              </button>
              <button
                class="
                  font-medium
                  text-blue-600
                  dark:text-blue-500
                  hover:underline
                  mx-2
                "
                @click="deleteItem(item.id)"
              >
                <TrashIcon class="w-4 text-red-500" aria-hidden="true" />
              </button>
            </td>
          </div>
        </tr>
      </tbody>
    </table>
    <ArticleAdd
      :open="conditionalCreate"
      @closeSlider="changeConditional"
      @addArticleSlider="createArticle"
    />
    <ArticleDelete
      :open="conditionalDelete"
      :article="articleForDelete"
      @closeModel="changeConditionalDelete"
      @deleteArticleModal="deleteArticle"
    />
    <ArticleAssign
      :open="conditionalAssign"
      :article="assignArticleStore"
      @closeModel="changeConditionalAssign"
      @assignArticleModal="assignArticle"
    />
    <ArticleEdit
      v-if="conditionalEdit"
      :open="conditionalEdit"
      :articleItem="articleForEdit"
      @closeSlider="changeConditionalEdit"
      @editArticleSlider="editArticle"
    />
  </div>
</template>

<script>
import {
  TrashIcon,
  PlusIcon,
  PencilIcon,
  EyeIcon,
} from "@heroicons/vue/outline";
import ArticleAdd from "@/components/article/ArticleAdd.vue";
import ArticleDelete from "@/components/article/ArticleDelete.vue";
import ArticleAssign from "@/components/article/ArticleAssign.vue";
import ArticleEdit from "@/components/article/ArticleEdit.vue";
import axiosA from "@/services/article";

import userAuth from '@/mixins/userAuth';
export default {
  components: {
    ArticleAdd,
    ArticleDelete,
    ArticleAssign,
    ArticleEdit,
    TrashIcon,
    PlusIcon,
    PencilIcon,
    EyeIcon,
  },
  mixins: [userAuth],
  data() {
    return {
      article: [],
      conditionalCreate: false,
      conditionalDelete: false,
      conditionalAssign: false,
      conditionalEdit: false,
      articleForDelete: null,
      assignArticleStore: null,
      articleForEdit: null,
    };
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      axiosA.articleList().then((res) => {
        this.article = res.data;
      });
    },
    changeConditional() {
      this.conditionalCreate = !this.conditionalCreate;
    },
    changeConditionalDelete() {
      this.conditionalDelete = !this.conditionalDelete;
    },
    changeConditionalAssign() {
      this.conditionalAssign = !this.conditionalAssign;
    },
    changeConditionalEdit() {
      this.conditionalEdit = !this.conditionalEdit;
    },
    createArticle() {
      this.changeConditional();
      this.getArticles();
    },
    deleteArticle() {
      this.changeConditionalDelete();
      this.articleForDelete = null;
      this.getArticles();
    },
    assignArticle() {
      this.changeConditionalAssign();
      this.getArticles();
    },
    editArticle() {
      this.changeConditionalEdit();
      this.articleForEdit = null;
      this.getArticles();
    },
    deleteItem(id) {
      this.articleForDelete = id;
      this.conditionalDelete = true;
    },
    assignStore(id) {
      this.assignArticleStore = id;
      this.conditionalAssign = true;
    },
    editItem(item) {
      this.conditionalEdit = true;
      this.articleForEdit = item;
    },
  },
};
</script>

<style>
</style>