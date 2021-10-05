<template>

	<div class="item-container">

		<div class="item-inner"
			:class="{ seen: $store.state.seen.seenArr.indexOf(articleInfos.url) !== -1 }"
			@click="articleClickHandler"
		>

			<h2 class="title">{{ articleInfos.title }}</h2>

			<p class="source">{{ articleInfos.source }}</p>

		</div>

	</div>

</template>

<script>

	export default {
		props: {
			articleInfos: {
				type: Object,
				required: true
			}
		},
		methods: {

			articleClickHandler(){

				this.$nuxt.$emit("please-update-current-article", this.articleInfos.id);

				// in normal cases we would use ids to identify articles in the store
				// but since we put ids on the fly at fetch, we cannot refer to them for the store logic (because they will change at every fetch, every page refresh) so we use .url, which seems to be unique for every article.
				// TODO : ask Api owner to deliver unique IDs in their datas

				if( this.$store.state.seen.seenArr.indexOf(this.articleInfos.url) === -1 ){

					this.$store.commit('seen/add', this.articleInfos.url);

				}

			}

		}
	}
</script>

<style lang="scss" scoped>

	.item {

		&-container {
			display: block;
			width: $articleWidth;
			height: 100%;
			position: relative;

			@media #{ $tablet }{
				width: 50%;
			}

			@media #{ $mobile }{
				width: 100%;
			}
		}

		&-inner {
			display: flex;
			flex-flow: column nowrap;
			justify-content: space-between;

			min-height: 100px;
			height: 100%;
			margin: $offsetItem * 2;
			padding: $offsetItem * 4;
			background-color: rgba(0,0,0,0.05);
			border-radius: 8px;
			cursor: pointer;
			opacity: 1;

			color: $baseColorFont;

			will-change: transform;
			transition: transform .15s;

			&.seen {
				opacity: 0.25;
			}

			&:hover {
				transform: translateY(-10px);
			}

			& > * {
				pointer-events: none;
				margin: 0;
				padding: 0;
			}
			
			.title {
				font-size: 1em;
			}

			.source {
				font-size: 0.75em;
				font-style: italic;
				text-transform: capitalize;
				text-align: right;
			}

		}

	}

</style>