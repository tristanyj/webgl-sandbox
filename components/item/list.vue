<template>
	<div class="list">
		<item-single v-for="n in 3" :key="n" :index="n"/>
	</div>
</template>

<style lang="stylus" scoped>
	.list {
		padding 100px 0
	}
</style>

<script>
	import itemSingle from '@/components/item/single'

	export default {
		name: 'item-list',
		components: {
			itemSingle
		}
	}
</script>