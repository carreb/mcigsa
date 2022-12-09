<template>
  <router-view :animationRan="animationRan" @initialAnimationFinished="(animationRan = true)" />
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      animationRan: false,
    }
  }
}
</script>

<style>
</style>
