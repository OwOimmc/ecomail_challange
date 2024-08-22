<template>
  <NuxtLink
    v-if="!props.isButton"
    :class="twMerge(defaultClass, computedClasses, props.class)"
    :to="props.href"
  >
    <slot></slot>
  </NuxtLink>

  <button v-else :class="twMerge(defaultClass, computedClasses, props.class)">
    <slot></slot>
  </button>
</template>

<script setup>
import { twMerge } from 'tailwind-merge'

const props = defineProps({
  class: {
    type: String,
    default: ''
  },
  isButton: {
    type: Boolean,
    default: false
  },
  href: {
    type: String,
    default: '#'
  },
  variant: {
    type: String,
    default: 'default'
  },
  outlined: {
    type: Boolean,
    default: false
  }
})

const defaultClass = `px-[2.2rem] py-[1.8rem] font-bold text-[1.6rem] leading-[1.6rem] border border-[.2rem] rounded-[.6rem] inline-block transition-colors duration-200 ease-linear`

const variantClasses = {
  default: {
    filled:
      'border-green text-white bg-green hover:border-green hover:bg-white hover:text-black',
    outlined: 'border-green hover:bg-green hover:text-white'
  },
  mint: {
    filled:
      'border-mint bg-mint text-emerald hover:border-mint hover:bg-white hover:text-emerald',
    outlined: 'border-mint hover:bg-mint hover:text-white'
  },
  teal: {
    filled:
      'border-teal text-white bg-teal hover:border-teal hover:bg-white hover:text-black',
    outlined: 'border-teal hover:bg-teal hover:text-white'
  }
}

const computedClasses = computed(() => {
  const variantType = props.outlined ? 'outlined' : 'filled'
  return variantClasses[props.variant][variantType]
})
</script>
