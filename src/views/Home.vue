<template lang="pug">
.wrapper
	HomeBackground.wrapper__background--1
	.wrapper__background--2
	v-eco-navbar.navbar(
		:brand="$t('headers.ecosphere')",
		:options="navbarOptions",
		hideBrand="xs"
	)
	.content
		img.logo(src="/img/logo.png")
		h4.header {{ $t("site.title") }}
		//- h6.subheader Data can be beautiful
		p.description {{ $t("site.description") }}

		.actions
			v-eco-button(
				:label="`${$t('site.expo')} :ri-earth-line:`",
				@click="$router.push('/introduction/expo')",
				theme="invert"
			)
			v-eco-button(
				:label="$t('actions.get_started')",
				theme="hue",
				@click="$router.push('/introduction/ecosphere')"
			)
</template>

<script lang="ts">
import { defineComponent } from "vue";
import navbar from "@/assets/navbar";
import HomeBackground from "@/components/HomeBackground.vue";

export default defineComponent({
	name: "Home",
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
	components: {
		HomeBackground,
	},
});
</script>

<style lang="scss" scoped>
.wrapper {
	@include occupy-full-viewport;
	// background: $color-background-faded;
	background: transparent;
	opacity: 0.9;
	display: grid;
	grid-template-rows: min-content 1fr;
	padding: 0;

	&__background {
		&--1 {
			position: absolute;
			height: 100vh;
			width: 100vw;
			z-index: -2;
			opacity: 1;
			overflow: hidden;
		}

		&--2 {
			position: absolute;
			height: 100vh;
			width: 100vw;
			background: $color-background;
			z-index: -1;
			opacity: 0.7;
		}
	}
}

.navbar {
	border: 0 !important;
	background: transparent !important;
}

.content {
	align-self: center;
	justify-self: center;
	text-align: center;
	color: $color-contrast;
	width: 600px;
	max-width: 94vw;
}

.header {
	@include header-4;
	font-weight: $font-weight-light;
}

.subheader {
	@include header-6;
	font-weight: $font-weight-light;
}

.description {
	@include font-light;
	margin-top: $spacer-1;
}

.logo {
	width: 200px;
	max-width: 50%;
}

.actions {
	margin: $spacer-1 0;
	display: flex;
	column-gap: $spacer-0-5;
	justify-content: center;
}
</style>
