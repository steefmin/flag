<template>
  <svg
    class="Flag"
    :width="800"
    :height="600"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g class="animated flag" stroke="#000000">
      <path
        class=" "
        v-for="part in this.partsData"
        :d="part.pathData"
        :key="part.key"
        :fill="part.color"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'Flag',
  components: {},
  data: function () {
    return {
      parts: [
        '#AE1C28',
        '#FFFFFF',
        '#21468B'
      ],
      partHeight: 20,
      startAnimationOffsetY: 20,
      waveHeight: 50,
      waveLength: 200, // should not touch this, keep it 200
      aspectRatio: 0.666
    }
  },
  computed: {
    partsData: function () {
      const parts = []
      const paths = this.paths
      const colors = this.parts
      const partHeight = this.partHeight
      const waveHeight = this.waveHeight
      const curveLength = this.waveLength / 2

      function createPart (partNumber) {
        const nextNumber = partNumber + 1
        function createStartingPoint () {
          return `M0,${partNumber * partHeight} `
        }

        function createPositiveDirection () {
          function getPathForDownDirection (a) {
            const path = []
            path.push(`C${a * curveLength + curveLength * 0.36},${partNumber * partHeight},`)
            path.push(`${a * curveLength + curveLength * 0.63},${waveHeight + partNumber * partHeight},`)
            path.push(`${(a + 1) * curveLength},${waveHeight + partNumber * partHeight} `)
            return path.join('')
          }

          function getPathForUpDirection (a) {
            const path = []
            path.push(`C${a * curveLength + curveLength * 0.36},${partNumber * partHeight + waveHeight},`)
            path.push(`${a * curveLength + curveLength * 0.63},${partNumber * partHeight},`)
            path.push(`${(a + 1) * curveLength},${partNumber * partHeight} `)
            return path.join('')
          }

          const result = []
          for (let a = 0; a < paths; a++) {
            const direction = a % 2
            if (direction < 0 || direction > 1) {
              throw new Error('Invalid direction')
            }

            if (direction === 0) {
              result.push(getPathForDownDirection(a))
            }

            if (direction === 1) {
              result.push(getPathForUpDirection(a))
            }
          }
          return result.join('')
        }

        function createVertical () {
          if (paths % 2 === 0) {
            return `L${paths * curveLength},${nextNumber * partHeight}`
          }
          if (paths % 2 === 1) {
            return `L${paths * curveLength},${waveHeight + nextNumber * partHeight} `
          }
          throw new Error('Invalid direction')
        }

        function createNegativeDirection () {
          function getPathForUpDirection (a) {
            const path = []
            path.push(`C${(a - 1) * curveLength + curveLength * 0.63},${nextNumber * partHeight + waveHeight},`)
            path.push(`${(a - 1) * curveLength + curveLength * 0.36},${nextNumber * partHeight},`)
            path.push(`${(a - 1) * curveLength},${nextNumber * partHeight} `)
            return path.join('')
          }

          function getPathForDownDirection (a) {
            const path = []
            path.push(`C${(a - 1) * curveLength + curveLength * 0.63},${nextNumber * partHeight},`)
            path.push(`${(a - 1) * curveLength + curveLength * 0.36},${waveHeight + nextNumber * partHeight},`)
            path.push(`${(a - 1) * curveLength},${waveHeight + nextNumber * partHeight} `)
            return path.join('')
          }

          const result = []
          for (let a = paths; a > 0; a--) {
            const direction = a % 2
            if (direction < 0 || direction > 1) {
              throw new Error('Invalid direction')
            }

            if (direction === 0) {
              result.push(getPathForDownDirection(a))
            }

            if (direction === 1) {
              result.push(getPathForUpDirection(a))
            }
          }
          return result.join('')
        }

        function closeShape () {
          return 'Z'
        }

        const part = []
        part.push(createStartingPoint())
        part.push(createPositiveDirection())
        part.push(createVertical())
        part.push(createNegativeDirection())

        part.push(closeShape())

        parts.push({
          key: partNumber,
          pathData: part.join(''),
          color: colors[partNumber]
        })
      }

      for (let d = 0; d < this.parts.length; d++) {
        createPart.call(this, d)
      }

      return parts
    },
    svgHeight: function () {
      return 666 // todo: fix this
    },
    svgWidth: function () {
      return this.flagWidth
    },
    flagHeight: function () {
      return (this.parts.length) * this.partHeight
    },
    flagWidth: function () {
      return this.flagHeight / this.aspectRatio
    },
    paths: function () {
      // amount of half waves we need to draw to allow for the animation
      // the animation can be cycled after one wavelength
      return 48
      return 2 + Math.trunc(this.flagWidth / this.waveLength) * 2
    },
    animationStyle: function () {
      return {
        '--waveheight-translation': `translateY(-${this.waveHeight}px)`
      }
    }
  }
}
</script>

<style>
.animated {
  animation-direction: normal;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-delay: 0s;
  animation-fill-mode: forwards;
}

g {
  /*animation: move-x linear;*/
}

path {
  /*animation: move-y ease-in-out;*/
}

@keyframes move-x {
  from {
    /*transform: translateX(-200px); !* one waveLength = 200px *!*/
  }
  to {
    /*transform: translateX(0px);*/
  }
}

@keyframes move-y {
  from, to {
    /*transform: translateY(0px);*/
  }
  50% {
    /*transform: var(--waveheight-translation); !* one waveHeight *!*/
  }
}
</style>
