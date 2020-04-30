<template>
  <g>
    <rect
      width="700"
      height="700"
      :fill="skyColor"
    />
    <rect
      y="450"
      width="700"
      height="700"
      :fill="groundColor"
    />
    <line
      x1="350"
      y1="495"
      x2="700"
      y2="495"
      :stroke="shadowColor"
      :stroke-width="shadowWidth"
    />
    <line
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
      groundColor: '#96d65b',
      skyColor: '#9af5f0',
      // shadowColor: '#4B7820',
      shadowColor: '#64A02B',
      shadowWidth: 10
    }
  }
}
</script>

<style scoped>

</style>
