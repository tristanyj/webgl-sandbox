<template>
	<div class="container-page container-index">
		<div class="content">
			<div class="list">
				<div class="item" v-for="(sketch, i) in sketches" :key="i + Math.random()">
					<nuxt-link :to="sketch.url">
						{{ sketch.name }}
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.container-index {
		.content {
			.list {
				.item {
					margin-bottom 10px
					font-size 1.4rem
				}
			}
		}
	}
</style>

<script>
	import { mapGetters } from 'vuex'

	export default {
		computed: {
			...mapGetters({
				sketches: 'GET_SKETCHES'
			})
		}
	}
</script>
