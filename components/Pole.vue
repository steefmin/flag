<template>
  <svg class="Pole" width="700" height="700" xmlns="http://www.w3.org/2000/svg">
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
      y1="150"
      x2="350"
      y2="500"
      :stroke="poleColor"
      :stroke-width="poleWidth"
    />
  </svg>
</template>

<script>
export default {
  name: 'Pole',
  components: {},
  data: function () {
    return {
      poleWidth: 10,
      poleColor: '#ffffff',
      groundColor: '#f0557e',
      skyColor: '#f28c54'
    }
  }
}
</script>

<style scoped>
.Pole {
  border-radius: 700px;
}
</style>
