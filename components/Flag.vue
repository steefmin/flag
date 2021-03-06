<template>
  <g>
    <defs>
      <clipPath :id="clipPathId">
        <rect x="0" y="0" :width="clipWidth" :height="clipHeight" />
      </clipPath>
    </defs>

    <g id="flag" :style="clipPathStyle">
      <g id="horizontal-movement" class="animated flag" stroke="none" :style="animationStyle">
        <path
          class="animated part"
          v-for="part in this.partsData"
          :d="part.pathData"
          :key="part.key"
          :fill="part.color"
          :style="animationStyle"
        />
      </g>
    </g>
  </g>
</template>

<script>
export default {
  name: 'Flag',
  components: {},
  props: {
    waveHeight: {
      type: Number,
      default () {
        return 20
      }
    },
    aspectRatio: {
      type: Number,
      default: function () {
        return 0.666
      }
    },
    partHeight: {
      type: Number,
      default: function () {
        return 20
      }
    },
    parts: {
      type: Array,
      default: function () {
        return [
          '#AE1C28',
          '#FFFFFF',
          '#21468B'
        ]
      }
    }
  },
  data: function () {
    return {
      waveLength: 200, // should not touch this, keep it 200
      duration: 5000,
      id: null
    }
  },
  mounted: function () {
    this.id = this._uid
  },
  computed: {
    partsData: function () {
      const parts = []
      const paths = this.paths
      const colors = this.parts
      const partHeight = this.partHeight
      const waveHeight = this.waveHeight
      const animationOffsetY = this.waveHeight
      const curveLength = this.waveLength / 2

      function createPart (partNumber) {
        const nextNumber = partNumber + 1
        function createStartingPoint () {
          return `M0,${partNumber * partHeight + animationOffsetY} `
        }

        function createPositiveDirection () {
          function getPathForDownDirection (a) {
            const path = []
            path.push(`C${a * curveLength + curveLength * 0.36},${partNumber * partHeight + animationOffsetY},`)
            path.push(`${a * curveLength + curveLength * 0.63},${waveHeight + partNumber * partHeight + animationOffsetY},`)
            path.push(`${(a + 1) * curveLength},${waveHeight + partNumber * partHeight + animationOffsetY} `)
            return path.join('')
          }

          function getPathForUpDirection (a) {
            const path = []
            path.push(`C${a * curveLength + curveLength * 0.36},${partNumber * partHeight + waveHeight + animationOffsetY},`)
            path.push(`${a * curveLength + curveLength * 0.63},${partNumber * partHeight + animationOffsetY},`)
            path.push(`${(a + 1) * curveLength},${partNumber * partHeight + animationOffsetY} `)
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
            return `L${paths * curveLength},${nextNumber * partHeight + animationOffsetY}`
          }
          if (paths % 2 === 1) {
            return `L${paths * curveLength},${waveHeight + nextNumber * partHeight + animationOffsetY} `
          }
          throw new Error('Invalid direction')
        }

        function createNegativeDirection () {
          function getPathForUpDirection (a) {
            const path = []
            path.push(`C${(a - 1) * curveLength + curveLength * 0.63},${nextNumber * partHeight + waveHeight + animationOffsetY},`)
            path.push(`${(a - 1) * curveLength + curveLength * 0.36},${nextNumber * partHeight + animationOffsetY},`)
            path.push(`${(a - 1) * curveLength},${nextNumber * partHeight + animationOffsetY} `)
            return path.join('')
          }

          function getPathForDownDirection (a) {
            const path = []
            path.push(`C${(a - 1) * curveLength + curveLength * 0.63},${nextNumber * partHeight + animationOffsetY},`)
            path.push(`${(a - 1) * curveLength + curveLength * 0.36},${waveHeight + nextNumber * partHeight + animationOffsetY},`)
            path.push(`${(a - 1) * curveLength},${waveHeight + nextNumber * partHeight + animationOffsetY} `)
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
    clipHeight: function () {
      return this.flagHeight + 2 * this.waveHeight
    },
    clipWidth: function () {
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
      const visibleWaves = Math.ceil(this.flagWidth / this.waveLength)
      const animationWaves = 1
      return 2 * (visibleWaves + animationWaves)
    },
    animationStyle: function () {
      return {
        '--waveheight-translation': `translateY(-${this.waveHeight}px)`,
        '--animation-duration': `${this.duration}ms`
      }
    },
    clipPathId: function () {
      return 'clipPath-' + this.id
    },
    clipPathStyle: function () {
      return `clip-path: url(#${this.clipPathId})`
    }
  }
}
</script>

<style>
:root {
  /* sane defaults, overwrite in component properties */
  --animation-duration: 10000ms;
  --waveheight-translation: 200px;
}

.animated {
  animation-direction: normal;
  animation-duration: var(--animation-duration);
  animation-iteration-count: infinite;
  animation-delay: 0s;
  animation-fill-mode: forwards;
}

g {
  animation: move-x linear;
}

path {
  animation: move-y ease-in-out;
}

@keyframes move-x {
  from {
    transform: translateX(-200px); /* one waveLength = 200px */
  }
  to {
    transform: translateX(0px);
  }
}

@keyframes move-y {
  from, to {
    transform: translateY(0px);
  }
  50% {
    transform: var(--waveheight-translation); /* one waveHeight */
  }
}
</style>
