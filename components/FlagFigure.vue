<template>
  <div>
    <Pole id="pole"/>
    <Flag id="raisedFlag" class="flag" v-show="isRaised"/>
    <Flag id="halfRaisedFlag" class="flag" v-show="isHalfRaised" />
  </div>
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
.flag {
  position: absolute;
  left: 353px;
}

#raisedFlag {
  top: 132px;
}

#halfRaisedFlag {
  top: 230px;
}

div{
  position: absolute;
}

#pole {
}
</style>
