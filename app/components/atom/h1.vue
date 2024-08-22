<template>
  <h1
    :class="
      twMerge(
        `text-emerald font-bold tracking-[-.08rem]`,
        defaultSize,
        props.class
      )
    "
  >
    <slot></slot>
  </h1>
</template>

<script setup>
import { twMerge } from 'tailwind-merge'

const props = defineProps({
  class: {
    type: String,
    default: ''
  },
  default: {
    type: Boolean,
    default: true
  }
})

const defaultSize = props.default
  ? 'text-[4rem] leading-[4.2rem] sm:text-[5.5rem] sm:leading-[5.5rem]'
  : ''
</script>
