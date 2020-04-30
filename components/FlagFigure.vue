<template>
  <svg class="Figure" width="700" height="700" xmlns="http://www.w3.org/2000/svg">
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
      v-show="isHalfRaised"
    />
  </svg>
</template>

<script>
import Flag from './Flag.vue'
import Pole from './Pole'
import Wreath from './Wreath'

const raisedState = 'Raised'
const raidedWithPennonState = 'Raised with pennon'
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
      required: true
    },
    background: {
      type: String,
      default: 'day'
    }
  },
  computed: {
    isRaised: function () {
      return [raisedState, raidedWithPennonState].includes(this.flagState)
    },
    isHalfRaised: function () {
      return this.flagState === halfRaisedState
    },
    night: function () {
      return this.background === 'night'
    },
    hasPennon: function () {
      return this.flagState === raidedWithPennonState
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
  border-radius: 700px;
}

@media screen and (max-width: 740px) {
  svg {
    transform: scale(0.8);
  }
}

@media screen and (max-width: 600px) {
  svg {
    transform: scale(0.6);
  }
}

@media screen and (max-width: 460px) {
  svg {
    transform: scale(0.3);
  }
}

@media screen and (max-width: 230px) {
  svg {
    transform: scale(0.1);
  }
}
</style>
