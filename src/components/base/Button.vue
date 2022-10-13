<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: String,
  model: String,
  size: String,
  rounded: String,
})
const emits = defineEmits(['click'])
const buttonType = computed(() => {
  if (props.type === 'primary') { // Primary button style tailwind css
    return `border-green-500 ${props.model === 'outline' ? 'text-gren-600' : ''}` // Change text color and border
  } else {
    return `border-green-500 ${props.model === 'outline' ? 'text-green-700' : ''}`
  }
})
const buttonModel = computed(() => {
  if (props.model === 'outline') {
    return `border hover:border-transparent ${props.type === 'primary' ? 'hover:bg-green-700' : 'hover:bg-green-500' // Change hover color
      } hover:text-white`
  } else {
    return `border ${props.type === 'primary'
        ? 'bg-blue-600 hover:bg-blue-700'
        : 'brown-500 hover:bg-red-600'
      } text-white`
  }
})

const buttonSize = computed(() => {
  if (props.size === 'lg') {
    return 'text-md px-4 py-3'
  } else if (props.size === 'md') {
    return 'text-sm px-3 py-2'
  } else {
    return 'text-xs py-2 px-3'
  }
})

const roundedSize = computed(() => {
  if (props.rounded === 'full') {
    return 'rounded-full'
  } else if (props.rounded === 'lg') {
    return 'rounded-lg'
  } else if (props.rounded === 'md') {
    return 'rounded-md'
  } else if (props.rounded === 'sm') {
    return 'rounded'
  } else {
    return null
  }
})

const buttonAction = (event) => { // button define action
  emits('click', event)
}
</script>

<template>
  <button class="flex place-items-center justify-center font-semibold"
    :class="`${buttonType} ${buttonModel} ${buttonSize} ${roundedSize} Transition-all duration-300 ease-in-out`"
    @click="buttonAction($event)">
    <slot></slot>
  </button>
</template>