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
      id="shadow"
      x1="350"
      y1="495"
      x2="700"
      y2="495"
      :stroke="shadowColor"
      :stroke-width="shadowWidth"
      v-show="dayTime"
    />
    <line
      id="pole"
      x1="350"
      y1="150"
      x2="350"
      y2="500"
      :stroke="poleColor"
      :stroke-width="poleWidth"
    />
  </g>
</template>

<script>
export default {
  name: 'Pole',
  components: {},
  data: function () {
    return {
      poleWidth: 10,
      poleColor: '#ffffff',
      groundColorDay: '#96d65b',
      groundColorNight: '#71a144',
      skyColorDay: '#9af5f0',
      skyColorNight: '#415870',
      shadowColor: '#64A02B',
      shadowWidth: 10
    }
  },
  props: {
    nightTime: {
      type: Boolean
    }
  },
  computed: {
    dayTime: function () {
      return !this.nightTime
    },
    groundColor: function () {
      return this.dayTime ? this.groundColorDay : this.groundColorNight
    },
    skyColor: function () {
      return this.dayTime ? this.skyColorDay : this.skyColorNight
    }
  }
}
</script>

<style scoped>

</style>
