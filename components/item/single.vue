<template>
	<div class="item">
		<div class="item__image">
			<img :src="[`/images/${ index + 1 }.jpg`]" class="js-image">
		</div>
		<div class="item__description">
			<h1>Cultural diversion</h1>
			<p>We have to create culture, don't watch TV, don't read magazines, don't even listen to NPR. Create your own roadshow. The nexus of space and time where you are now is the most immediate sector of your universe, and if you're worrying about Michael Jackson or Bill Clinton or somebody else, then you are disempowered, you're giving it all away to icons, icons which are maintained by an electronic media so that you want to dress like X or have lips like Y.</p>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.item {
		padding-bottom 200px
		width 700px
		margin 0 auto

		img {
			opacity 0
			pointer-events none
		}

		&:last-child {
			padding-bottom 0
		}
	}
</style>

<script>
	export default {
		name: 'item-single',
		props: ['index']
	}
</script>