<template lang="pug">
nav.navigation.navigation--auto
	//- Logo
	img.navigation__logo(:src="logo")

	//- Options
	.navigation__option(v-for="(item, index) in navigation", :key="index")
		v-eco-dropdown(
			v-if="item.type === 'dropdown'",
			:label="item.label",
			:options="item.options",
			:flow="item.flow",
			:contain="item.contain",
			:centered="item.centered"
		)
			v-eco-icon(v-if="item.category === 'locale'", type="ri-translate-2")

	//- Theme Switching
	v-eco-icon(type="ri-sun-line")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { navigation } from "@/plugin/utils/types/navigation.interface";

export default defineComponent({
	name: "Navigation",
	props: {
		navigation: {
			type: Object as PropType<navigation>,
			required: true,
		},
		logo: {
			type: String as PropType<string>,
			required: true,
		},
	},
	methods: {
		switchTheme() {
			console.log("here");
		},
	},
});
</script>

<style lang="scss" scoped>
.navigation {
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	padding: $spacer-0-5;
	column-gap: $spacer-0-5;

	&__logo {
		margin-right: auto;
		max-width: $spacer-5;
		max-height: $spacer-1-75;
	}

	&--auto {
		background: $color-background-faded;
		color: $color-contrast;
	}
}
</style>
