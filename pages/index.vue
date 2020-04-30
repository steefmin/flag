<template>
  <div class="container">
    <FlagFigure :flag-state="state.flagState" :background="state.background"/>
    <div id="description">
      {{ description }}
    </div>
  </div>
</template>

<script>
import FlagFigure from '../components/FlagFigure'

export default {
  components: {
    FlagFigure
  },
  data: function () {
    return {
      descriptions: {
        sunDown: 'Er wordt niet gevlagd als de zon onder is.'
      }
    }
  },
  computed: {
    state: function () {
      if (this.sunDown) {
        return {
          flagState: 'Lowered',
          background: 'night',
          reason: 'sunDown'
        }
      }

      if (false) {
        return {
          flagState: 'Raised with pennon',
          background: 'day'
        }
      }

      return {
        flagState: 'Raised',
        background: 'day'
      }
    },
    sunDown: function () {
      const now = new Date()
      const sunRise = new Date()
      const sunSet = new Date()

      sunRise.setHours(6)
      sunRise.setMinutes(0)
      sunSet.setHours(21)
      sunSet.setMinutes(0)

      if (now < sunRise) {
        return true
      }

      if (now > sunSet) {
        return true
      }

      return false
    },
    description: function () {
      const reason = this.state.reason
      if (reason) {
        return this.descriptions[reason] || ''
      }
      return ''
    }
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

#description {
  margin: 10px;
}
</style>
