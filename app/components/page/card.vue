<template>
  <div class="relative flex size-full max-w-[39.2rem] flex-col">
    <span
      class="absolute right-32 top-32 text-[1.3rem] font-extrabold text-white"
    >
      {{ data.rating?.rate }}/5
    </span>
    <img
      width="392"
      height="200"
      class="min-h-[17.7rem] rounded-t-[1.5rem] object-cover sm:min-h-[20rem] lg:min-h-[21.8rem]"
      :src="`./img/category/${img}`"
      :srcset="`./img/category/${img}.png 1x, ./img/category/${img}@2x.png 2x`"
      :alt="data.title"
    />

    <div class="bg-g-gray flex h-full flex-col rounded-b-[1.5rem] p-32">
      <h3
        class="text-emerald mb-32 text-[2.8rem] font-bold leading-[3.2rem] tracking-[-.056rem] sm:text-[3.2rem] sm:leading-[3.5rem]"
      >
        {{ truncateText(data.title) }}
      </h3>

      <p class="text-emerald mb-48 font-medium leading-[2.3rem]">
        {{ truncateText(data.description, 142) }}
      </p>
      <div class="mt-auto">
        <AtomBtn target="_blank" :href="data.image">Detail produktu</AtomBtn>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => {}
  }
})

const category = {
  jewelery: 'jewelery',
  "women's clothing": 'women',
  electronics: 'electronics',
  "men's clothing": 'men'
}

const img = computed(() => {
  return category[props.data?.category]
})
</script>
