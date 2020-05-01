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
        none: 'Er is vandaag niets aan de hand.'
      }
    }
  },
  computed: {
    state: function () {
      const now = new Date()
      if (this.sunDown(now)) {
        return {
          flagState: 'Lowered',
          background: 'night',
          reason: 'sunDown'
        }
      }

      if (this.royalBirthday(now)) {
        return {
          flagState: 'Raised',
          foreground: ['pennon'],
          background: 'day',
          reason: 'DutchRoyalBirthday'
        }
      }

      if (this.mayForth(now)) {
        return {
          flagState: 'HalfRaised',
          background: 'day',
          foreground: ['wreath'],
          reason: 'remembranceDay'
        }
      }

      if (this.mayFifth(now)) {
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
    description: function () {
      const reason = this.state.reason
      if (reason) {
        return this.descriptions[reason] || ''
      }
      return ''
    }
  },
  methods: {
    mayForth: function (now) {
      if (now.getMonth() !== 4) {
        return false
      }

      if (now.getDate() !== 4) {
        return false
      }

      // Disabled this rule for this year (2020)
      // as a special instruction was sent out:
      // https://www.rijksoverheid.nl/actueel/nieuws/2020/04/17/vlaginstructie-bij-herdenking-slachtoffers-tweede-wereldoorlog-op-4-mei-2020
      // if (now.getHours() < 18) {
      //   return false
      // }

      return true
    },
    mayFifth (now) {
      if (now.getMonth() !== 4) {
        return false
      }

      if (now.getDate() !== 5) {
        return false
      }

      return true
    },
    royalBirthday (now) {
      return false
    },
    sunDown (now) {
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
    }
  }
}
</script>

<style scoped>
  #description {
    margin: 10px;
  }
</style>
