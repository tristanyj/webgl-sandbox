<template>
	<header>
		<div class="left">
			<nuxt-link to="/">
				<!-- <img src="" alt=""> -->
			</nuxt-link>
		</div>
		<div v-if="menu" class="right">
			<div class="links">
				<nuxt-link
					v-for="(item, i) in menu.group"
					:key="i" exact
					:field="item.link">
					<span>
						{{ item.label }}
					</span>
				</nuxt-link>
			</div>
		</div>
	</header>
</template>

<style lang="stylus" scoped>
header {

}
</style>

<script>
export default {
	props: {
		menu: {
			type: Object,
			default: null
		}
	},
	mounted() {
		console.log(this.menu)
	}
}
</script>
