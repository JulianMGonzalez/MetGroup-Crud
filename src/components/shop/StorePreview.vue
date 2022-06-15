<template>
  <div
    class="
      flex
      w-96
      flex-col
      justify-center
      flex-wrap
      mx-2
      my-1
      bg-white
      rounded-2xl
      shadow-xl shadow-slate-300/60
    "
  >
    <router-link :to="{ name: 'store-view', params: { id: shop.id } }">
      <img
        class="aspect-video w-96 rounded-t-2xl object-cover object-center"
        :src="shop.image"
      />
    </router-link>
    <div class="p-4">
      <small class="text-blue-400 text-xs">store</small>
      <router-link :to="{ name: 'store-view', params: { id: shop.id } }">
        <h5 class="text-2xl font-medium text-slate-600 pb-2">
          {{ shop.name }}
        </h5>
      </router-link>
      <p class="text-sm tracking-tight font-light text-slate-400 leading-6">
        {{ shop.description }}
      </p>
      <div class="flex items-center justify-between mt-1">
        <div class="flex flex-column items-center pt-4">
          <div class="h-12 w-12">
            <img
              :src="shop.user.avatar"
              alt
              class="h-full w-full object-cover overflow-hidden rounded-full"
            />
          </div>
          <p class="font-medium ml-3">
            {{ shop.user.name }} {{ shop.user.last_name }}<br />
            <span class="text-base font-light">{{ shop.user.email }}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="p-5">
      <router-link
        :to="{ name: 'store-view', params: { id: shop.id } }"
        class="
          inline-flex
          items-center
          py-2
          px-3
          text-sm
          font-medium
          text-center text-white
          bg-blue-700
          rounded-lg
          hover:bg-blue-800
          focus:ring-4 focus:outline-none focus:ring-blue-300
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
        "
      >
        Read more
        <ArrowNarrowRightIcon
          class="w-4"
          aria-hidden="true"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import { ArrowNarrowRightIcon } from '@heroicons/vue/solid'
export default {
  components: {
    ArrowNarrowRightIcon,
  },
  props: {
    shop: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>