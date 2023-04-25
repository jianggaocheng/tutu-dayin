<template>
  <div class="preview">
    {{ JSON.stringify(this.$props.options) }}
  </div>
</template>

<script setup>
  defineProps({
    options: Object
  })
</script>

<style>

</style>
