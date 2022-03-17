<template lang="pug">
nav.navbar
	//- Sidebar Toggle
	VEcoLink.navbar__toggle(
		v-if="toggle",
		label=":ri-menu-4-line:",
		@click.stop="$emit('toggle')"
	)

	//- Logo & Branding
	img.navbar__logo(
		v-if="logo",
		:src="logo",
		@click="$router.push('/')",
		:class="[`navbar__hide--${hideLogo}`]"
	)
	VEcoLink.navbar__brand(
		v-if="brand",
		:label="brand",
		@click="$router.push('/')",
		:class="[`navbar__hide--${hideBrand}`]"
	)

	.navbar__divider

	//- Options
	.navbar__option(
		v-for="option in options",
		:class="[`navbar__hide--${option.hide}`]"
	)
		VEcoLink(
			v-if="option.type === navbar_item_types.link",
			:label="option.attributes?.label",
			:config="option.attributes?.config || {}",
			@click="handleSelection(option.attributes?.href, option.attributes?.action)"
		)
		VEcoLink(
			v-if="option.type === navbar_item_types.theme",
			:label="theme === 'dark' ? ':ri-sun-line:' : ':ri-moon-line:'",
			@click="switchTheme"
		)
		VEcoSelect(
			v-if="option.type === navbar_item_types.select",
			:label="option.attributes?.label",
			:options="option.attributes?.options || []",
			:config="option.attributes?.config || {}"
		)
		VEcoAccessibility(
			v-if="option.type === navbar_item_types.accessibility",
			:label="option.attributes?.label",
			:resetLabel="option.attributes?.resetLabel",
			:config="option.attributes?.config"
		)
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import VEcoLink from "@/plugin/components/action/link.vue";
import VEcoSelect from "@/plugin/components/action/select.vue";
import VEcoAccessibility from "@/plugin/components/action/accessibility.vue";
import {
	navbar_hide,
	navbar_item_types,
	navbar_option,
	themes,
} from "@/plugin/utils/types.interface";

export default defineComponent({
	name: "Navbar",
	props: {
		logo: {
			type: String as PropType<string>,
			default: "",
		},
		brand: {
			type: String as PropType<string>,
			default: "",
		},
		toggle: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
		options: {
			type: Array as PropType<navbar_option[]>,
			default: () => [],
		},
		hideLogo: {
			type: [Boolean, String] as PropType<navbar_hide>,
			default: false,
		},
		hideBrand: {
			type: [Boolean, String] as PropType<navbar_hide>,
			default: false,
		},
	},
	data() {
		return {
			navbar_item_types,
			theme: "auto" as themes,
		};
	},
	components: { VEcoLink, VEcoSelect, VEcoAccessibility },
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
		handleSelection(href: string, action: () => void): void {
			this.$ecosphere.handlers.navigate(href);
			this.$ecosphere.handlers.runAction(action);
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
	column-gap: $spacer-0-625;
	background: $color-background-faded;

	@include respond-below(sm) {
		column-gap: $spacer-0-5;
	}

	&__logo {
		height: $spacer-1;
		cursor: pointer;
	}

	&__brand {
		@include font-light;
		margin: 0;
		font-size: $spacer-0-75;
	}

	&__divider {
		margin-left: auto;
	}

	&__option,
	&__brand {
		color: $color-contrast;
		> * {
			color: $color-contrast;
			@include font-light;
			margin: 0;
		}
	}

	&__toggle {
		color: $color-contrast;
		transform: translateY(calc($spacer-0-125/2));
		display: none;
		// margin-right: $spacer-0-5;

		@include respond-below(sm) {
			display: block;
		}
	}

	&__hide {
		&--xs {
			@include respond-below(xs) {
				display: none;
			}
		}

		&--sm {
			@include respond-below(sm) {
				display: none;
			}
		}

		&--md {
			@include respond-below(md) {
				display: none;
			}
		}
	}
}
</style>
