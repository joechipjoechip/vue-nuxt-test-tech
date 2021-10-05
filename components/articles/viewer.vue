<template>

	<div class="viewer-container">

		<div class="viewer-inner">

			<close-button class="close-btn" @click="$emit('please-remove-current-article')" />

			<div class="breadcrumb style-meta">

				<span class="category">{{ currentArticle.category }}</span>

				<span class="country">{{ currentArticle.country }}</span>

				<span class="lang">{{ currentArticle.language }}</span>

			</div>
			
			<p class="date style-meta">
				il y a {{ Math.floor(( Date.now() - new Date(currentArticle.published_at).getTime() ) / 1000 / 60 / 60 / 24) }} jours
			</p>

			<h3 class="title">{{ currentArticle.title }}</h3>

			<a v-if="currentArticle.image" :href="currentArticle.url" target="_BLANK">
				<img class="image" :src="currentArticle.image" :alt="currentArticle.title">
			</a>

			<p class="description">{{ currentArticle.description }}</p>

			<p v-if="currentArticle.author" class="author">{{ currentArticle.author }}</p>

			<p class="source">source: {{ currentArticle.source }}</p>

			<a :href="currentArticle.url" class="link" target="_BLANK">Voir l'article depuis la source</a>

			<p 
				class="unread-button"
				@click="markAsUnreadHandler"
			>
				Marqué comme non lu et retourner à la liste
			</p>

		</div>

	</div>

</template>

<script>

	import CloseButton from "@/assets/images/close.svg?inline";

	export default {
		components: {
			"close-button": CloseButton
		},
		props: {
			currentArticle: {
				type: Object,
				required: true
			}
		},
		methods: {

			markAsUnreadHandler(){

				this.$store.commit('seen/remove', this.currentArticle.url);

				this.$emit('please-remove-current-article');

			}

		}
	}
</script>

<style lang="scss" scoped>

	.viewer {

		&-container {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			min-height: 100vh;
			flex-flow: column nowrap;
			justify-content: flex-start;
			align-items: center;
			text-align: center;

			background-color: $baseColor;
			color: $baseColorFont;
		}

		&-inner {
			width: 80%;
			max-width: $layoutMax;
			margin: 10vh auto 0 auto;

			.close-btn {
				position: fixed;
				top: 20px;
				right: 20px;
				width: 30px;
				height: 30px;
				cursor: pointer;

				@media #{ $big-screen } {
					
					top: 50px;
					right: 50px;

					width: 80px;
					height: 80px;

				}
			}

			.title {
				font-size: 3em;
				text-transform: uppercase;
				margin: $verticalMargin auto;

				@media #{ $mobile } {
					font-size: 1.5em;
				}
			}

			.image {
				max-width: 100%;
				border-radius: 999px;
				opacity: 1;

				will-change: opacity;
				transition: opacity .2s;

				&:hover {
					opacity: 0.8
				}
			}

			.style-meta {
				font-size: 0.8em;
				text-align: left;
				margin: 0;
			}

			.breadcrumb {

				text-transform: capitalize;

				> * {

					&:not(:last-of-type)::after {
						content: "/";
						margin-left: 7px;
					}
				}

			}

			.description {
				margin-top: $verticalMargin;
			}

			.source {
				font-style: italic;
			}

			.link,
			.unread-button {
				width: 40%;
				display: inline-block;
				margin: 40px auto;
				padding: 20px;
				border: solid 2px rgba(0,0,0,0.2);
				border-radius: 999px;
				cursor: pointer;
				color: #000;

				will-change: border-color color;
				transition: border-color, color .2s;

				&:hover {
					border-color: rgba(255,0,0,0.2);
					color: #ff0000;
				}
			}

			.link {
				&:hover {
					border-color: rgba(0,0,255,0.2);
					color: #0000ff;
				}
			}
		}
	}

</style>
