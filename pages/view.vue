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
        },
        message: 'test'
      }
    }
  },
  created() {
    const payload = this.$route.query.payload
    try {
      this.payload = JSON.parse(atob(payload))
    } catch (e) {
      // do nothing, fallback to default values
    }
  },
  computed: {
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#message {
  width: 300px;
}
</style>
