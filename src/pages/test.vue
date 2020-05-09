<template>
	<div class="page test">
		<nuxt-link to="/" class="back">
			back
		</nuxt-link>
		<div ref="container" class="canvas" />
	</div>
</template>

<style lang="stylus" scoped>
.page.test {
}
</style>

<script>
import * as THREE from 'three'

import Base from '~/assets/scripts/three/Base'

import sketchMixin from '~/mixins/get-sketch'
import statsMixin from '~/mixins/get-stats'
import guiMixin from '~/mixins/get-gui'

export default {
	mixins: [ sketchMixin, statsMixin, guiMixin ],
	data() {
		return {
			settings: {
				progress: 0
			}
		}
	},
	mounted() {
		console.log({ page: this.$route.name })

		this.base = new Base({
			DOM: {
				container: this.$refs.container
			}
		})

		this.initCube()
		this.initGui()
		this.loop()
	},
	methods: {
		initGui() {
			this.gui.add(this.settings, 'progress', 0, 1, 0.01)
		},
		initCube() {
			this.cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x00ff00 }))
			// this.cube.position.z = 1
			this.base.scene.add(this.cube)
		},
		loop() {
			this.cube.rotation.x += 0.01
			this.cube.rotation.y += 0.01

			this.base.render()

			this.stats.update()

			window.requestAnimationFrame(() => { this.loop() })
		}
	},
	head() {
		return {
			title: 'WebGL Sandbox | Test',
			meta: [
				{ hid: 'description', name: 'description', content: 'Sandbox for WebGL and GLSL experiments' },
			]
		}
	},
}
</script>
