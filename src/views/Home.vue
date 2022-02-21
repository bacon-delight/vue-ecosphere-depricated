<template lang="pug">
.wrapper
	v-eco-navbar.navbar(brand="Ecosphere", :options="navbarOptions")
	.content
		img.logo(src="/img/logo.png")
		h4.header {{ $t("site.title") }}
		//- h6.subheader Data is messy, representation doesn't have to be
		p.description {{ $t("site.description") }}

		.actions
			//- v-eco-button(
			//- 	:label="$t('actions.learn')",
			//- 	@click="$router.push('/guide/installation')"
			//- )
			v-eco-button(
				:label="$t('actions.get_started')",
				:config="{ theme: 'hue' }",
				@click="$router.push('/guide/installation')"
			)
</template>

<script lang="ts">
import { defineComponent } from "vue";
import navbar from "@/assets/navbar";

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
});
</script>

<style lang="scss" scoped>
.wrapper {
	@include occupy-full-viewport;
	background: $color-background-faded;
	display: grid;
	grid-template-rows: min-content 1fr;
	padding: 0;
}

.navbar {
	border: 0 !important;
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
	column-gap: $spacer-1;
	justify-content: center;
}
</style>
