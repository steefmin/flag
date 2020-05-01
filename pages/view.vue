<template>
  <div class="container">
    <FlagFigure
      :flag-state="payload.state.flagState"
      :background="payload.state.background"
      :foreground="payload.state.foreground"
    />
    <div id="message">
      {{ payload.message }}
    </div>
  </div>
</template>

<script>
import FlagFigure from '../components/FlagFigure'
import { ToggleButton } from 'vue-js-toggle-button'

const payloadStore = 'PayloadStore'

export default {
  components: {
    FlagFigure,
    ToggleButton
  },
  head () {
    return {
      title: 'Vlag bericht...'
    }
  },
  data: function () {
    return {
      payload: {
        state: {
          flagState: 'Lowered',
          foreground: [],
          background: 'day'
        }
      }
    }
  },
  created() {
    let payload = this.$route.query.payload

    if (!payload) {
      payload = localStorage.getItem(payloadStore)
    }

    try {
      this.payload = JSON.parse(atob(payload))
      localStorage.setItem(payloadStore, payload)
    } catch (e) {
      // do nothing, fallback to default values
    }
  }
}
</script>

<style scoped>
#message {
  width: 300px;
}
</style>
