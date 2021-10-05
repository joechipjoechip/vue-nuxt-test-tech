<template>

	<div class="list-container">

		<item 
			v-for="article in articles" :key="article.id"
			:article-infos="article"
		/>

	</div>

</template>

<script>

	import Item from "@/components/articles/item.vue";

	export default {
		components: {
			"item": Item
		},
		props: {
			articles: {
				type: Array,
				required: true
			}
		}
	}
</script>

<style lang="scss" scoped>

	.list-container {
		width: 80%;
		max-width: $layoutMax;
		margin: 0 auto;
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: stretch;
	}

</style>