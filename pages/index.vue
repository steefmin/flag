<template>
  <div class="container">
    <FlagFigure :flag-state="this.flag.flagState" :background="this.flag.background" :foreground="this.flag.foreground"/>
    <div id="description">
      {{ this.flag.description }}
    </div>
  </div>
</template>

<script>
import FlagFigure from '../components/FlagFigure'

export default {
  components: {
    FlagFigure
  },
  head () {
    return {
      title: 'Online vlaggenmast'
    }
  },
  data: function () {
    return {
      flag: {},
    }
  },
  async fetch() {
    this.flag = await fetch('.netlify/functions/date').then(res => res.json())
  }
}
</script>

<style scoped>
  #description {
    margin: 10px;
  }
</style>
