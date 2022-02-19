<template lang="pug">
nav.navbar
	//- Sidebar Toggle
	v-eco-link.navbar__toggle(
		v-if="sidebarToggle",
		icon="ri-menu-4-line",
		@click="$emit('toggleSidebar')"
	)

	//- Logo
	img.navbar__logo(:src="logo")

	//- Options
	.navbar__option(v-for="(item, index) in navbar", :key="index")
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

		//- Links
		v-eco-link(
			v-if="item.type === 'link'",
			:label="item.label",
			:icon="item.icon",
			@click="handleClick(item)"
		)
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { navbar_item, menu_item } from "@/plugin/utils/types.interface";

export default defineComponent({
	name: "Navbar",
	data() {
		return {
			theme: "auto",
		};
	},
	props: {
		sidebarToggle: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
		navbar: {
			type: Object as PropType<navbar_item[]>,
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
		handleClick(item: menu_item) {
			if (item.route) {
				this.$router.push(item.route);
			}
			if (item.action) {
				item.action();
			}
		},
	},
	mounted() {
		this.getCurrentTheme();
	},
});
</script>

<style lang="scss" scoped>
.navbar {
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	padding: $spacer-0-5;
	column-gap: $spacer-0-5;

	&__logo {
		margin-right: auto;
		max-width: $spacer-5;
		max-height: $spacer-1-5;
	}

	&__toggle {
		display: none;

		@include respond-below(sm) {
			display: block;
		}
	}

	&--auto {
		background: $color-background-faded;
		color: $color-contrast;
	}
}
</style>
