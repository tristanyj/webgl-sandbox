<template>
	<div class="container-page container-sketch container-sketch-test">
		<nuxt-link class="back" to="/">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left">
				<line x1="19" y1="12" x2="5" y2="12"></line>
				<polyline points="12 19 5 12 12 5"></polyline>
			</svg>
		</nuxt-link>
		<div ref="container" class="canvas-container" :style="{ width: size, height: size }">

		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.container-sketch-test {
		position absolute
		top 0
		left 0
		width 100%
		height 100%
		background #000

		.back {
			position absolute
			top 80px
			left -10px
			padding 10px 25px 10px 35px
			border-radius 10px
			background #fff
			z-index 10

			svg {
				width 20px
			}
		}

		.canvas-container {
			position absolute
			top 50%
			left 50%
			transform translate(-50%, -50%)
		}
	}
</style>

<script>
	import Base from '@/assets/scripts/three/Base'

	import getSketchMixin from '@/mixins/get-sketch'

	export default {
		name: 'sketch-{{ dashCase name }}',
		head () {
			return {
				title: '{{ titleCase name }} — WebGL Sandbox'
			}
		},
		mixins: [ getSketchMixin ],
		computed: {
			size() {
				return this.sketch.full ? '100%' : '50%'
			}
		},
		mounted() {
			this.base = new Base({
				DOM: {
					container: this.$refs.container
				},
				fullscreen: this.sketch.full
			})
		}
	}
</script>
