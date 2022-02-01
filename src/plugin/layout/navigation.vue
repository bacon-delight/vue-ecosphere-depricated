<template lang="pug">
nav.navigation.navigation--auto
	//- Logo
	img.navigation__logo(:src="logo")

	//- Options
	.navigation__option(v-for="(item, index) in navigation", :key="index")
		//- Dropdown
		v-eco-dropdown(
			v-if="item.type === 'dropdown' || item.type === 'locale'",
			:label="item.label",
			:options="item.options",
			:flow="item.flow",
			:contain="item.contain",
			:centered="item.centered"
		)
			v-eco-icon(v-if="item.type === 'locale'", type="ri-translate-2")

		//- Theme Switching
		v-eco-link(
			v-if="item.type === 'theme'",
			:icon="theme === 'dark' ? 'ri-sun-line' : 'ri-moon-line'",
			@click="switchTheme"
		)
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { navigation_items } from "@/plugin/utils/types/navigation.interface";

export default defineComponent({
	name: "Navigation",
	data() {
		return {
			theme: "auto",
		};
	},
	props: {
		navigation: {
			type: Object as PropType<navigation_items>,
			required: true,
		},
		logo: {
			type: String as PropType<string>,
			required: true,
		},
	},
	methods: {
		getCurrentTheme() {
			this.theme = this.$ecosphere.theme.getCurrentTheme();
		},
		switchTheme() {
			if (this.theme === "dark") {
				this.$ecosphere.theme.setTheme("light");
			} else {
				this.$ecosphere.theme.setTheme("dark");
			}
			this.getCurrentTheme();
		},
	},
	mounted() {
		this.getCurrentTheme();
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
