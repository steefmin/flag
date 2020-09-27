<template>
  <div class="container">
    <transition
      appear
      name="fade"
    >
      <FlagFigure
        v-if="flag"
        :flag-state="flag.flagState"
        :background="flag.background"
        :foreground="flag.foreground"
      />
    </transition>
    <div id="description">
      {{ flag.description }}
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
      flag: false,
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

  .fade-enter-active {
    animation-name: open;
    animation-duration: 2s;
    animation-timing-function: linear;
  }

  @keyframes open {
    0% {
      clip-path: circle(0%);
    }
    100% {
      clip-path: circle(100%);
    }
  }
</style>
