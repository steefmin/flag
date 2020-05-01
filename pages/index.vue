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
  head () {
    return {
      title: 'Online vlaggenmast'
    }
  },
  data: function () {
    return {
      descriptions: {
        sunDown: 'Er wordt niet gevlagd als de zon onder is.',
        DutchRoyalBirthday: 'Er is een jarige in het koninklijk huis.',
        remembranceDay: 'Vandaag worden alle oorlogsslachtoffers herdacht.',
        liberationDay: 'De bevrijding aan het einde van de tweedewereldoorlog wordt gevierd.',
        none: 'Er is vandaag niets aan het handje.'
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

      if (this.royalBirthday) {
        return {
          flagState: 'Raised',
          foreground: ['pennon'],
          background: 'day',
          reason: 'DutchRoyalBirthday'
        }
      }

      if (this.mayForth) {
        return {
          flagState: 'HalfRaised',
          background: 'day',
          foreground: ['wreath'],
          reason: 'remembranceDay'
        }
      }

      if (this.mayFifth) {
        return {
          flagState: 'Raised',
          background: 'day',
          foreground: [],
          reason: 'liberationDay'
        }
      }

      return {
        flagState: 'Lowered',
        background: 'day',
        reason: 'none'
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
    },
    mayForth: function () {
      const now = new Date()

      if (now.getMonth() !== 4) {
        return false
      }

      if (now.getDate() !== 4) {
        return false
      }

      if (now.getHours() >= 18) {
        return true
      }

      return false
    },
    mayFifth () {
      const now = new Date()

      if (now.getMonth() !== 4) {
        return false
      }

      if (now.getDate() !== 5) {
        return false
      }

      return true
    },
    royalBirthday () {
      return false
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
