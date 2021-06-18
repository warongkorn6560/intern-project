<template>
  <div class="container">
    <div>
      <h1>index file</h1>
      <div class="flex">
        <div v-for="(card, i) in userInfos" :key="`user-info-${i}`">
          <CardUserInfo :card="card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    userInfos: [
      { name: "John", age: "21" },
      { name: "Joe", age: "22" },
      { name: "Steve", age: "23" },
      { name: "Michael", age: "24" }
    ]
  })
};
</script>
