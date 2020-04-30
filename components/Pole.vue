<template>
  <g>
    <rect
      id="sky"
      width="700"
      height="700"
      :fill="skyColor"
    />
    <rect
      id="ground"
      y="450"
      width="700"
      height="700"
      :fill="groundColor"
    />
    <line
      id="groundShadow"
      :x1="poleX"
      y1="495"
      x2="700"
      y2="495"
      :stroke="shadowColor"
      :stroke-width="shadowWidth"
    />
    <line
      id="pole"
      :x1="poleX"
      y1="150"
      :x2="poleX"
      y2="500"
      :stroke="poleColor"
      :stroke-width="poleWidth"
    />
    <line
      id="poleShadow"
      :x1="poleX+3*poleWidth/8"
      y1="150"
      :x2="poleX+3*poleWidth/8"
      y2="500"
      :stroke="poleShadowColor"
      :stroke-width="poleWidth/4"
    />
    <g id="bushes">
      <Bushes />
    </g>
  </g>
</template>

<script>
import Bushes from './Bushes'

export default {
  name: 'Pole',
  components: {
    Bushes
  },
  data: function () {
    return {
      poleX: 350,
      poleWidth: 10,
      poleColor: '#ffffff',
      poleShadowColor: '#afafaf',
      groundColorDay: '#96d65b',
      skyColorDay: '#9af5f0',
      skyColorNight: '#415870',
      shadowColor: '#64A02B',
      shadowWidth: 10
    }
  },
  props: {
    nightTime: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  computed: {
    dayTime: function () {
      return !this.nightTime
    },
    groundColor: function () {
      return this.dayTime ? this.groundColorDay : this.shadowColor
    },
    skyColor: function () {
      return this.dayTime ? this.skyColorDay : this.skyColorNight
    }
  }
}
</script>

<style scoped>
#bushes {
  transform:
    translateX(280px)
    translateY(287px)
    scaleX(-1)
    scale(0.5);
}
</style>
