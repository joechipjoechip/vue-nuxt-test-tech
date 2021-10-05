<template>

	<div class="wrapper">

		<articles-manager />

	</div>

</template>

<script>

import ArticlesManager from "@/components/articles/manager.vue"

export default {

	components: {

		"articles-manager": ArticlesManager

	}

}
</script>

<style lang="scss" scoped>

	.wrapper {
		background-color: $baseColor;
	}

</style>
