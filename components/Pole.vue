<template>
  <svg class="Pole" :width="poleWidth" :height="poleLength" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
      <line
        x1="0"
        y1="0"
        x2="0"
        :y2="poleLength"
        stroke="#000000"
        :stroke-width="poleWidth"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'Pole',
  components: {},
  data: function () {
    return {
      poleWidth: 6,
      poleLength: 400
    }
  }
}
</script>

<style>

</style>
