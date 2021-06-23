<template>
  <div
    class="w-40 h-56 text-center shadow-lg bg-white hover:scale-110 transform duration-300"
  >
    <img class="pb-5" src="/images/plant1.jpeg"/>
    <h4>{{ card.img }}</h4>
    {{ card.article }}
     <n-link to="card.slug">
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
