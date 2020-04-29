<template>
  <div>
<!--    <Pole id="pole"/>-->
    <Flag id="flag"/>
  </div>
</template>

<script>
import Flag from '~/components/Flag.vue'
import Pole from '~/components/Pole'

export default {
  name: 'FlagFigure',
  components: {
    Flag,
    Pole
  }
}
</script>

<style>

#flag {
  /*position: relative;*/
  /*left: -10px;*/
  /*top: -320px;*/
}

#pole {
  position: relative;
}
</style>
