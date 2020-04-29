<template>
  <div class="container">
    <FlagFigure state="Raised"/>
  </div>
</template>

<script>
import FlagFigure from '../components/FlagFigure'

export default {
  components: {
    FlagFigure
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
