<template>

	<div v-if="articles" class="wrapper">

		<!-- LIST -->
		<transition name="anim-list">

			<div v-if="!currentArticle">

				<h1 class="section-title">Articles</h1>

				<div class="list-container">

					<list-item-inner 
						v-for="article in articles" :key="article.id"
						:article-infos="article"
						@please-update-current-article="updateCurrentArticle"
					/>

				</div>

			</div>

		</transition>

		<!-- VIEWER -->
		<transition name="anim-viewer">
		
			<viewer-inner 
				v-if="currentArticle"
				:current-article="currentArticle" 
				@please-remove-current-article="currentArticle = null"
			/>

		</transition>

	</div>

</template>

<script>

	import { v4 as uuidv4 } from 'uuid';

	import ListItemIner from "@/components/articles/list-item-inner.vue"

	import ViewerInner from "@/components/articles/viewer-inner.vue"

	export default {
		components: {
			"list-item-inner": ListItemIner,
			"viewer-inner": ViewerInner
		},
		data(){
			return {
				articles: null,
				currentArticle: null
			}
		},
		watch: {

			articles( newVal ){

				console.log("watch de this.articles : ", newVal);

			}

		},
		created(){

			this.fetchMediastack();

		},
		methods: {

			fetchMediastack(){

				const fetchOptions = {
					method: 'GET',
					headers: new Headers({
						'Access-Control-Allow-Origin': "*"
					})
				};

				fetch(
					// `http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASTACK_API_KEY}&countries=fr`,
					'https://fr.wikipedia.org/w/api.php?'
					+ 'format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=20'
					+ '&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max'
					+ '&gsrsearch=zelda' ,
					fetchOptions
				)
				.then(response => {

					console.log("response  normal :", response);

					return response.json();

				})
				.then(json => {

					console.log("json  :", json);
					// this.articles = this.assignID(json.data);

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

				this.currentArticle = this.articles.find(article => article.id === clickedArticleID);

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
	}

	.list-container {
		width: 80%;	
		margin: 0 auto;
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: stretch;
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
