<template>

	<div v-if="articles" class="wrapper">

		<!-- LIST -->
		<transition name="anim-list" @after-enter="afterEnterHandler">

			<div v-if="!currentArticle">

				<h1 class="section-title">Articles</h1>

				<list :articles="articles" />

			</div>

		</transition>

		<!-- VIEWER -->
		<transition name="anim-viewer">
		
			<viewer v-if="currentArticle"
				:current-article="currentArticle" 
				@please-remove-current-article="currentArticle = null"
			/>

		</transition>

	</div>

</template>

<script>

	import { v4 as uuidv4 } from 'uuid';

	import List from "@/components/articles/list.vue"
	import Viewer from "@/components/articles/viewer.vue"

	export default {
		components: {
			"list": List,
			"viewer": Viewer
		},
		data(){
			return {
				articles: null,
				currentArticle: null,
				lastScrollLevel: 0
			}
		},
		watch: {

			articles( newVal ){

				console.log("watch de this.articles : ", newVal);

			}

		},
		created(){

			this.$nuxt.$on('please-update-current-article', details => {

				this.lastScrollLevel = details.scrollLevelAtItemClick;

				this.updateCurrentArticle(details.articleID);

			});

			this.fetchMediastack();

		},
		methods: {

			fetchMediastack(){

				const fetchOptions = {
					method: 'GET',
				};

				fetch(
					`http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASTACK_API_KEY}&countries=fr`,
					fetchOptions
				)
				.then(response => {
					
					return response.json();

				})
				.then(json => {

					this.articles = this.assignID(json.data);

				})
				.catch(error => {

					console.log("something wrong happens : ", error);

				});

			},

			assignID( dataArray ){

				// mediastack doesn't provide id for articles, 
				// so we assign on the fly one uuid to every article
				// (we need ids on articles to handle them better)

				return dataArray.map(article => {
					
					article.id = uuidv4();

					return article;

				});

			},

			updateCurrentArticle( clickedArticleID ){

				console.log("updateCurrentArticle triggered");

				this.currentArticle = this.articles.find(article => article.id === clickedArticleID);

			},

			afterEnterHandler(){

				window.scrollTo({
					top: this.lastScrollLevel,
					left: 0,
					behavior: 'smooth'
				});

			}

		}
	}
</script>

<style lang="scss" scoped>

	.wrapper {
		font-family: 'Roboto', sans-serif;
	}

	.section-title {
		display: block;
		text-align: center;
		font-size: 3em;
		padding-top: 40px;
		margin-bottom: 30px;
	}

	// TRANSITIONS
	// list
	.anim-list-enter-active, 
	.anim-list-leave-active {
		transform: translateY(0px);
		opacity: 1;

		will-change: opacity transform;

		transition: all .5s;
	}

	.anim-list-enter, 
	.anim-list-leave-to {
		transform: translateY(-150px);
		opacity: 0;
	}

	// viewer
	.anim-viewer-enter-active, 
	.anim-viewer-leave-active {
		transform: translateY(0px);
		opacity: 1;

		will-change: opacity transform;

		transition: all .5s;
	}

	.anim-viewer-enter, 
	.anim-viewer-leave-to {
		transform: translateY(150px);
		opacity: 0;
	}

</style>
