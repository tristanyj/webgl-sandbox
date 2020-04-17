<template>
	<div class="container-page container-sketch container-sketch-image-hover-1">
		<nuxt-link class="back" to="/">back</nuxt-link>
		<item-list/>
	</div>
</template>

<script>
	import * as THREE from 'three'

	import Scene from '@/assets/scripts/three/hover-image-1/Scene'
	import Image from '@/assets/scripts/three/hover-image-1/Image'

	import itemList from '@/components/item/list'

	import getSketchMixin from '@/mixins/get-sketch'
	import getStatsMixin from '@/mixins/get-stats'
	import getGuiMixin from '@/mixins/get-gui'

	export default {
		layout: 'sketch',
		name: 'sketch-image-hover-1',
		head () {
			return {
				title: 'Image Hover 1 — WebGL Sandbox'
			}
		},
		data() {
			return {
				settings: {
					progress: 0,
				}
			}
		},
		components: {
			itemList
		},
		mixins: [ getSketchMixin, getStatsMixin, getGuiMixin ],
		methods: {
			initGui() {
				this.gui.add(this.settings, 'progress', 0, 1, 0.01)
			},
			loop() {
				this.canvas.render()
				this.images.forEach(img => { img.render() })

				this.stats.update()

				window.requestAnimationFrame(() => { this.loop() })
			}
		},
		mounted() {
			this.canvas = new Scene({
				DOM: {
					container: document.querySelector('.canvas-container')
				}
			})

			this.images = []
			Array.from(document.querySelectorAll('.js-image')).forEach(el => {
				this.images.push(new Image(el, this.canvas))
			})

			this.initGui()
			this.loop()
		}
	}
</script>
