<template>
  <div class="container">
    <div>
      <FlagFigure/>
    </div>
  </div>
</template>

<script>
  import FlagFigure from "./FlagFigure";

  export default {
  components: {
    FlagFigure
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
