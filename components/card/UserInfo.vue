<template>
  <div
    class="w-36 h-56 rounded-md shadow-lg bg-gray-200 bg-opacity-50 p-4 hover:scale-110 transform duration-300"
  >
    <img src="/images/test-image.svg" />
    <h4>{{ card.name }}</h4>
    age {{ card.age }}
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
