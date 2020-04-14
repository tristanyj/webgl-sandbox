<template>
	<div class="__layout-wrapper">
		<div class="__content-wrapper">
			<nuxt/>
		</div>
	</div>
</template>

<script>
	export default {
		mounted() {}
	}
</script>

<style lang="stylus">
	.__layout-wrapper {
		position relative
		font-size 1.6rem
		min-height 100vh

		.__content-wrapper {
			padding 100px
		}
	}
</style>
