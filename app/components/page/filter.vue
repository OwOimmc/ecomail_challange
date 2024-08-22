<template>
  <div class="flex justify-center gap-16 sm:justify-start">
    <button
      :class="
        sortOrder === 'desc'
          ? 'bg-teal text-white'
          : 'text-teal hover:underline'
      "
      class="rounded-[.6rem] px-[1.7rem] py-[1.3rem] text-[1.3rem] font-extrabold leading-[1.4rem]"
      @click="setBest"
    >
      Nejlepší
    </button>
    <button
      class="rounded-[.6rem] px-[1.7rem] py-[1.3rem] text-[1.3rem] font-extrabold leading-[1.4rem]"
      :class="
        sortOrder === 'asc' ? 'bg-teal text-white' : 'text-teal hover:underline'
      "
      @click="setWorst"
    >
      Nejhorší
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  sortOrder: {
    type: String,
    required: true,
    default: 'desc'
  }
})

const emit = defineEmits(['updateSortOrder'])

const setBest = () => {
  emit('updateSortOrder', 'desc')
}

const setWorst = () => {
  emit('updateSortOrder', 'asc')
}
</script>
