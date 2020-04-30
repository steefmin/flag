<template>
  <div class="container">
    <FlagFigure :flag-state="state.flagState" :background="state.background" :foreground="state.foreground"/>
    <div id="description">
      {{ description }}
    </div>
    <div id="buttonbox">
      <toggle-button
        :value="settings.background"
        :labels="{checked: 'Dag', unchecked: 'Nacht'}"
        @change="settings.background = !settings.background"
        width="150"
        height="40"
        font-size="16"
      />
      <toggle-button
        :value="settings.flagState"
        :labels="{checked: 'Vlag', unchecked: 'Geen vlag'}"
        @change="settings.flagState = !settings.flagState"
        width="150"
        height="40"
        font-size="16"
      />
      <toggle-button
        :value="settings.inTop"
        :labels="{checked: 'In top', unchecked: 'Half stok'}"
        @change="settings.inTop = !settings.inTop"
        width="150"
        height="40"
        font-size="16"
      />
      <toggle-button
        :value="settings.pennon"
        :labels="{checked: 'Wimpel', unchecked: 'Geen wimpel'}"
        @change="settings.pennon = !settings.pennon"
        width="150"
        height="40"
        font-size="16"
      />
      <toggle-button
        :value="settings.wreath"
        :labels="{checked: 'Krans', unchecked: 'Geen krans'}"
        @change="settings.wreath = !settings.wreath"
        width="150"
        height="40"
        font-size="16"
      />
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
  data: function () {
    return {
      descriptions: {
        sunDown: 'Er wordt niet gevlagd als de zon onder is.',
        DutchRoyalBirthday: 'Er is een jarige in het koninklijk huis.'
      },
      settings: {
        background: null,
        flagState: false,
        pennon: false,
        inTop: true,
        wreath: false
      }
    }
  },
  mounted () {
    this.settings.background = !this.sunDown
  },
  computed: {
    state: function () {
      const state = {
        background: this.settings.background ? 'day' : 'night',
        flagState: 'Raised',
        foreground: []
      }

      if (this.settings.wreath) {
        state.foreground.push('wreath')
      }

      if (this.settings.pennon) {
        state.foreground.push('pennon')
      }

      if (!this.settings.inTop) {
        state.flagState = 'HalfRaised'
      }

      if (!this.settings.flagState) {
        state.flagState = 'Lowered'
      }

      return state
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

#buttonbox {
  width: 300px;
}

#buttonbox > * {
  margin: 5px;
}
</style>
