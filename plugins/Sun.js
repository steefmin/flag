export default {
  methods: {
    async sunData ($axios) {
      const data = await $axios.$get(
        'https://api.sunrise-sunset.org/json?lat=136.7201600&lng=184.4203400&formatted=0'
      )
      const rise = new Date(data.results.sunrise)
      const set = new Date(data.results.sunset)
      return {
        sun: {
          rise: {
            hour: rise.getHours(),
            minute: rise.getMinutes()
          },
          set: {
            hour: set.getHours(),
            minute: set.getMinutes()
          }
        }
      }
    },
    sunDown (now) {
      const sunRise = new Date()
      const sunSet = new Date()

      sunRise.setHours(this.sun.rise.hour)
      sunRise.setMinutes(this.sun.rise.minute)
      sunSet.setHours(this.sun.set.hour)
      sunSet.setMinutes(this.sun.set.minute)

      if (now < sunRise) {
        return true
      }

      if (now > sunSet) {
        return true
      }

      return false
    }
  }
}
