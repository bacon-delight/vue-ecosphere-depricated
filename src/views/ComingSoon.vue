<template lang="pug">
v-eco-wrapper.main
	v-eco-navbar(
		:options="navbarOptions",
		brand="Ecosphere",
		logo="/img/logo.png"
	)
	.container
		.container__item
			v-eco-icon.container__icon(type="ri-seedling-line")
		.container__item
			v-eco-header(:label="$t('headers.coming_soon')", :type="2")
		.container__item
			v-eco-header(:label="$t('site.coming_soon')", :type="6")
		.container__item
			v-eco-text(:label="$t('site.coming_soon_description')")
		.container__item.container__buttons
			v-eco-button(
				:label="`${$t('keywords.documentation')} :ri-book-read-line:`",
				theme="transparent",
				@click="$router.push('/guide/installation')"
			)
			v-eco-button(
				:label="`${$t('keywords.home')} :ri-home-line:`",
				theme="invert",
				@click="$router.push('/')"
			)
</template>

<script>
import { defineComponent } from "vue";
import navbar from "@/assets/navbar";

export default defineComponent({
	name: "ComingSoon",
	data() {
		return {
			navbar,
		};
	},
	computed: {
		navbarOptions() {
			return this.navbar();
		},
	},
});
</script>

<style lang="scss" scoped>
.main {
	height: 100vh;
}

.container {
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	align-items: center;
	align-content: center;

	&__item {
		width: fit-content !important;
		max-width: min(94%, 600px);
		justify-self: center;
		text-align: center;
	}

	&__icon {
		font-size: $spacer-3;
		color: $color-hue-faded;
	}

	&__buttons {
		display: flex;
		column-gap: $spacer-0-5;
	}
}
</style>
