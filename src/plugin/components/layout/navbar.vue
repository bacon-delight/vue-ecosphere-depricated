<template lang="pug">
nav.navbar
	//- Sidebar Toggle
	VEcoLink.navbar__option.navbar__toggle(
		v-if="toggle",
		label=":ri-menu-4-line:",
		@click.stop="$emit('toggle')"
	)

	//- Logo & Branding
	img.navbar__logo(v-if="logo", :src="logo", @click="$router.push('/')")
	VEcoLink.navbar__brand(
		v-if="brand",
		:label="brand",
		@click="$router.push('/')"
	)

	//- Options
	.navbar__option(v-for="option in options")
		VEcoLink(
			v-if="option.type === navbar_item_types.link",
			:label="option.attributes.label"
		)
		VEcoLink(
			v-if="option.type === navbar_item_types.theme",
			:label="theme === 'dark' ? ':ri-moon-line:' : ':ri-sun-line:'",
			@click="switchTheme"
		)
		VEcoSelect(
			v-if="option.type === navbar_item_types.select",
			:label="option.attributes.label",
			:options="option.attributes.options",
			:config="option.attributes.config"
		)
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import VEcoLink from "@/plugin/components/action/link.vue";
import VEcoSelect from "@/plugin/components/action/select.vue";
import {
	navbar_item_types,
	navbar_option,
	themes,
} from "@/plugin/utils/types.interface";

export default defineComponent({
	name: "Navbar",
	props: {
		logo: {
			type: String as PropType<string>,
			required: false,
		},
		brand: {
			type: String as PropType<string>,
			required: false,
		},
		toggle: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
		options: {
			type: Object as PropType<navbar_option[]>,
			required: true,
		},
	},
	data() {
		return {
			navbar_item_types,
			theme: "auto" as themes,
		};
	},
	components: { VEcoLink, VEcoSelect },
	methods: {
		getCurrentTheme(): void {
			this.theme = this.$ecosphere.theme.getCurrentTheme();
		},
		switchTheme(): void {
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
.navbar {
	padding: $spacer-0-375 $spacer-0-5;
	border-bottom: 1px solid rgba($color-helper-grey, 0.2);
	display: flex;
	align-items: center;
	column-gap: $spacer-0-5;

	&__logo {
		height: $spacer-1;
	}

	&__brand {
		@include font-light;
		font-size: $spacer-1;
		margin-right: auto;
	}

	&__option,
	&__brand {
		color: $color-contrast;
		> * {
			color: $color-contrast;
		}
	}

	&__toggle {
		transform: translateY(calc($spacer-0-125/2));
		display: none;

		@include respond-below(sm) {
			display: block;
		}
	}
}
</style>