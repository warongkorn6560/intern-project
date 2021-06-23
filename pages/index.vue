<template>
  <div class="bg-green-50">
    <div>
      <div
        class="m-2 bg-no-repeat bg-auto md:bg-cover"
        style="background-image:url('images/cover2.jpeg')"
      >
        <div class="py-5">
          <div class="flex justify-between container mx-auto ">
            <div><h6 class="text-white px-5 md:px-0">LO</h6></div>
            <div
              class="flex justify-end container mx-auto text-white md:text-black"
            >
              <div>ABOUT</div>
              <div class="pl-5 ">ARTICLES</div>
              <div class="pl-5 ">SUBSCRIBE</div>
            </div>
          </div>
        </div>
        <div
          class="pt-32 pb-44 flex-col justify-center container mx-auto text-white md:text-black"
        >
          <h1 class="text-center">LOMBOK</h1>
          <div class="text-center">HOLISTIC HEALTH</div>
        </div>
      </div>
      <div class="container flex-col justify-center">
        <div class="text-center pt-16">LASTEST ARTICLES</div>
        <div
          class="pt-10 pb-32 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8"
        >
          <div v-for="(card, i) in userInfos" :key="`user-info-${i}`">
            <CardUserInfo :card="card" />
          </div>
        </div>
      </div>
    </div>
    <div class="pb-44 m-5">
      <div
        class="max-w-lg mx-auto bg-white shadow-md overflow-hidden md:max-w-7xl"
      >
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img
              class="h-72 w-full object-cover md:h-full md:w-72"
              src="/images/about.jpeg"
            />
          </div>
          <div class="p-8">
            <div class="text-center mx-auto md:m-10">
              <h6 class="pb-5">ABOUT</h6>
              Holistic health is about caring for the whole person — providing
              for your physical, mental, spiritual, and social needs. It's
              rooted in the understanding that all these aspects affect your
              overall health, and being unwell in one aspect affects you in
              others. Take stress, for example. It's a psychological response,
              but it can also cause physical symptoms, such as headaches,
              trouble sleeping, weight gain, and muscle.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    userInfos: [
      {
        article: "How to use mindfullness in your everyday life",
        slug: "contact-us",
        img: "/images/plant1.jpeg"
      },
      {
        article: "What are the best walking meditations",
        slug: "contact-us",
        img: "/images/plant2.jpeg"
      },
      {
        article: "How to go deep into the mind of hope",
        slug: "contact-us",
        img: "/images/plant3.jpeg"
      },
      {
        article: "How to go deep into the mind of hope",
        slug: "contact-us",
        img: "/images/plant3.jpeg"
      },
      {
        article: "How to go deep into the mind of hope",
        slug: "contact-us",
        img: "/images/plant3.jpeg"
      },
      {
        article: "How to go deep into the mind of hope",
        slug: "contact-us",
        img: "/images/plant3.jpeg"
      },
      {
        article: "How to go deep into the mind of hope",
        slug: "contact-us",
        img: "/images/plant3.jpeg"
      },
      {
        article: "How to go deep into the mind of hope",
        slug: "contact-us",
        img: "/images/plant3.jpeg"
      }
    ]
  })
};
</script>
