<template>
  <div class="container">
    <FlagFigure :flag-state="state.flagState" :background="state.background" :foreground="state.foreground"/>
    <div id="switchBox" class="box">
      <b-form-input v-model="message" placeholder="Vandaag hijs ik de vlag omdat... "/>
      <toggle-button
        :value="!isSunDown"
        :labels="{checked: 'Dag', unchecked: 'Nacht'}"
        @change="settings.background = !settings.background"
        :width=150
        :height=40
        :font-size=16
        color="var(--info)"
      />
      <toggle-button
        :value="settings.flagState"
        :labels="{checked: 'Vlag', unchecked: 'Geen vlag'}"
        @change="settings.flagState = !settings.flagState"
        :width=150
        :height=40
        :font-size=16
        color="var(--info)"
      />
      <toggle-button
        :value="settings.inTop"
        :labels="{checked: 'In top', unchecked: 'Half stok'}"
        @change="settings.inTop = !settings.inTop"
        :width=150
        :height=40
        :font-size=16
        color="var(--info)"
      />
      <toggle-button
        :value="settings.pennon"
        :labels="{checked: 'Wimpel', unchecked: 'Geen wimpel'}"
        @change="settings.pennon = !settings.pennon"
        :width=150
        :height=40
        :font-size=16
        color="var(--info)"
      />
      <toggle-button
        :value="settings.wreath"
        :labels="{checked: 'Krans', unchecked: 'Geen krans'}"
        @change="settings.wreath = !settings.wreath"
        :width=150
        :height=40
        :font-size=16
        color="var(--info)"
      />
    </div>
    <div id="buttonBox" class="box">
      <b-button
        id="popover-link"
        variant="info"
      >
        Create link
      </b-button>

      <b-popover target="popover-link" triggers="click" placement="top">
        <template v-slot:title>Kopieer link</template>
        <a :href="fullLink">{{ fullLink }}</a>
      </b-popover>

      <b-button
        :href="emailHref"
        variant="info"
      >
        Create email
      </b-button>
    </div>
  </div>
</template>

<script>
import FlagFigure from '../components/FlagFigure'
import { ToggleButton } from 'vue-js-toggle-button'

export default {
  components: {
    FlagFigure,
    'toggle-button': ToggleButton,
  },
  head () {
    return {
      title: 'Maak je eigen vlag'
    }
  },
  data: function () {
    return {
      settings: {
        background: null,
        flagState: false,
        pennon: false,
        inTop: true,
        wreath: false
      },
      message: ''
    }
  },
  mounted () {
    this.settings.background = !this.sunDown(new Date())
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
    isSunDown () {
      return this.sunDown(new Date())
    },
    emailHref () {
      return `mailto:?body=${encodeURIComponent(this.fullLink)}`
    },
    fullLink () {
      return `${window.location.origin}/${this.route()}`
    }
  },
  methods: {
    route () {
      const payload = JSON.stringify(
        {
          state: this.state,
          message: this.message
        }
      )
      return `view?payload=${btoa(payload)}`
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

.box {
  width: 500px;
  margin: 5px;
}

#switchBox {

}

#switchBox > * {
  margin: 5px;
}

#buttonbox > a {
  text-decoration: none;
}
</style>
