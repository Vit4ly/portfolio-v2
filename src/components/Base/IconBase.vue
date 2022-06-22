<script setup lang="ts">
import sprite from "../../assets/images/icons.svg";
import {defineExpose, computed} from "vue";

interface Props {
  title: string,
  width?: number,
  height?: number
}
const props = defineProps<Props>()

defineExpose( {
  width: 18,
  height: 18
})

const uri = computed(() => `${sprite}#${props.title}`)

</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height">
    <use :href="uri"></use>
  </svg>
</template>

<style lang="scss" scoped>
use {
  fill: currentColor;
}
</style>
