<template>
	<div class="page index">
		<container>
			<div class="list">
				<div
					v-for="(sketch, i) in sketches" :key="i + Math.random()"
					class="item">
					<nuxt-link :to="sketch.url">
						{{ sketch.name }}
					</nuxt-link>
				</div>
			</div>
		</container>
	</div>
</template>

<style lang="stylus" scoped>
.page.index {
}
</style>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters({
			sketches: 'GET_SKETCHES'
		})
	},
	head() {
		return {
			title: 'WebGL Sandbox | Home',
			meta: [
				{ hid: 'description', name: 'description', content: 'Sandbox for WebGL and GLSL experiments' },
			]
		}
	}
}
</script>

