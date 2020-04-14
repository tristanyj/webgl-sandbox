import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters({
			sketches: 'GET_SKETCHES'
		}),
		sketch() {
			return this.sketches.filter(sketch => sketch.url.substring(1) === this.$route.name)[0]
		}
	},
	mounted() {
		console.log(this.sketch)
	}
}
