<template>
  <section class="container mx-auto body-font p-5">
      <div class="mx-auto flex px-5 md:flex-row flex-col items-center jobcard">
        <div
          class="
            lg:flex-grow
            md:w-1/2
            lg:pr-24
            md:pr-16
            flex flex-col
            md:items-start md:text-left
            mb-16
            md:mb-0
            items-center
          "
        >
          <figure class="visible">
            <div class="">
              <div class="pt-10 px-2 sm:px-6">
                <span
                  class="
                    inline-block
                    py-1
                    px-2
                    rounded-full
                    bg-green-600
                    text-white text-xs
                    font-bold
                    tracking-widest
                    mb-2
                  "
                  >Sold</span
                >
                <h1
                  class="
                    title-font
                    sm:text-4xl
                    text-3xl
                    mb-4
                    font-medium
                  "
                >
                  {{article.name}}
                </h1>
                <p class=" text-base pb-6">
                  {{article.description}}
                </p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center pb-12">
                    <div class="h-12 w-12">
                      <img
                        :src="article.stores ? article.stores[0].image : ''"
                        alt
                        class="
                          h-full
                          w-full
                          object-cover
                          overflow-hidden
                          rounded-full
                        "
                      />
                    </div>
                    <p class=" font-bold ml-3">
                     
                       {{article.stores ? article.stores[0].name : ''}}<br />
                      <span class=" text-base font-light"
                        >{{article.stores ? article.stores[0].store_articles.reference : ''}}</span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:block hidden">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            :src="article.image"
          />
        </div>
      </div>
  </section>
</template>

<script>
import axiosA from "@/services/article";

export default {
  data() {
    return {
      article: {},
    };
  },
  mounted() {
    axiosA.articleDetail(this.$route.params.id).then((res) => {
      this.article = res.data;
    });
  },
};
</script>