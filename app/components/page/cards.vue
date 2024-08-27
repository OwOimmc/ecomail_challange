<template>
  <main class="@container pb-[12rem]">
    <div
      class="@[86.8rem]:px-60 @[86.8rem]:max-w-[calc(124rem+12rem)] mx-auto w-full px-28"
    >
      <PageFilter
        :sort-order="sortOrder"
        class="mb-60"
        @update-sort-order="(sort) => (sortOrder = sort)"
      ></PageFilter>

      <div
        class="mx-auto mb-60 grid grid-cols-1 justify-items-center gap-28 sm:max-w-[74.8rem] sm:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-32"
      >
        <div v-for="(card, i) in cards" :key="`id-card-${i}`">
          <PageCard :data="card"></PageCard>
        </div>
      </div>

      <div v-show="cards.length < data.length" class="text-center">
        <AtomBtn variant="mint" :is-button="true" @click="loadMore">
          Načíst další
        </AtomBtn>
      </div>
    </div>
  </main>
</template>

<script setup>
const viewport = useViewport()

const definitionItems = {
  xs: 3,
  sm: 4,
  lg: 6
}

const currentPage = ref(1)

const itemsPerPage = computed(() => {
  return definitionItems[viewport.breakpoint.value]
})

const sortOrder = ref('desc')

const sortedData = computed(() => {
  return data.value.sort((a, b) => {
    if (sortOrder.value === 'asc') {
      return a.rating.rate - b.rating.rate
    } else {
      return b.rating.rate - a.rating.rate
    }
  })
})

const { data } = await useFetch('https://fakestoreapi.com/products')

const cards = computed(() => {
  const start = 0
  const end = currentPage.value * itemsPerPage.value
  return sortedData.value.slice(start, end)
})

const loadMore = () => {
  currentPage.value += 1
}
</script>
