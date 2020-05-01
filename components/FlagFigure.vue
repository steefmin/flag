<template>
  <svg class="Figure" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
    <Pole
      id="pole"
      :nightTime="night"
    />
    <Flag
      id="raisedFlag"
      class="flag"
      v-show="isRaised"
    />
    <Flag
      id="pennon"
      :parts="pennon.parts"
      :partHeight="pennon.partHeight"
      :aspectRatio="pennon.aspectRatio"
      :waveHeight="pennon.waveHeight"
      v-show="hasPennon"
    />
    <Flag
      id="halfRaisedFlag"
      class="flag"
      v-show="isHalfRaised"
    />
    <Wreath
      v-show="hasWreath"
    />
  </svg>
</template>

<script>
import Flag from './Flag.vue'
import Pole from './Pole'
import Wreath from './Wreath'

const raisedState = 'Raised'
const halfRaisedState = 'HalfRaised'

export default {
  name: 'FlagFigure',
  components: {
    Wreath,
    Flag,
    Pole
  },
  data: function () {
    return {
      pennon: {
        parts: [
          '#ff9600'
        ],
        partHeight: 8,
        aspectRatio: 0.08,
        waveHeight: 15
      }
    }
  },
  props: {
    flagState: {
      type: String,
      default () {
        return raisedState
      }
    },
    background: {
      type: String,
      default () {
        return 'day'
      }
    },
    foreground: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    isRaised: function () {
      return this.flagState === raisedState
    },
    isHalfRaised: function () {
      return this.flagState === halfRaisedState
    },
    night: function () {
      return this.background === 'night'
    },
    hasPennon: function () {
      return this.foreground.includes('pennon')
    },
    hasWreath: function () {
      return this.foreground.includes('wreath')
    }
  }
}
</script>

<style scoped>
#pennon {
  transform: translate(352px, 132px);
}

#raisedFlag {
  transform: translate(352px, 132px);
}

#halfRaisedFlag {
  transform: translate(352px, 232px);
}

svg {
  border-radius: 600px;
}
</style>
