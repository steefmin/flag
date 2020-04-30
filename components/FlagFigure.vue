<template>
  <svg class="Figure" width="700" height="700" xmlns="http://www.w3.org/2000/svg">
    <Pole id="pole"/>
    <Flag id="raisedFlag" class="flag" v-show="isRaised"/>
    <Flag id="halfRaisedFlag" class="flag" v-show="isHalfRaised" />
  </svg>
</template>

<script>
import Flag from '~/components/Flag.vue'
import Pole from '~/components/Pole'

const raisedState = 'Raised'
const halfRaisedState = 'HalfRaised'

export default {
  name: 'FlagFigure',
  components: {
    Flag,
    Pole
  },
  props: {
    state: {
      type: String,
      required: true,
      validator: function (value) {
        return [raisedState, halfRaisedState]
      }
    }
  },
  computed: {
    isRaised: function () {
      return this.state === raisedState
    },
    isHalfRaised: function () {
      return this.state === halfRaisedState
    }
  }
}
</script>

<style scoped>
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
