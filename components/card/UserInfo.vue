<template>
  <div>
    <n-link :to="card.slug">
      <div
        class="w-full  text-center shadow-lg bg-white hover:scale-105 transform duration-300"
      >
        <div
          class="w-full"
          :style="`background-image:url(${card.img});padding-bottom:50%;`"
        />
        <p class="py-8">{{ card.article }}</p>
      </div>
    </n-link>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      default: null
    }
  }
};
</script>
