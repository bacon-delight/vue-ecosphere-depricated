<template lang="pug">
.accessibility
	//- Label
	VEcoLink.accessibility__label(@click="toggle", label=":ri-service-line:")

	//- Drop Area
	.accessibility__content(
		v-if="open",
		@mouseleave="toggle",
		:class="[settings.contain ? 'accessibility__content--contain' : '', `accessibility__content--flow-${settings.flow}`, settings.outline ? 'accessibility__content--outline' : '', `accessibility__content--theme-${settings.theme}`]"
	)
		//- .accessibility__group
		//- 	VEcoIcon.accessibility__group--icon(type="ri-font-size-2")
		//- 	VEcoButton(
		//- 		label=":ri-subtract-line:",
		//- 		:disabled="size === 0",
		//- 		:config="{ compact: true }",
		//- 		@click="toggleSize(accessibility_toggle.decrease)"
		//- 	)
		//- 	VEcoButton(
		//- 		label=":ri-add-line:",
		//- 		:disabled="size === 2",
		//- 		:config="{ compact: true }",
		//- 		@click="toggleSize(accessibility_toggle.increase)"
		//- 	)
		.accessibility__group
			VEcoIcon.accessibility__group--icon(type="ri-text-spacing")
			VEcoButton(
				label=":ri-subtract-line:",
				:disabled="spacing === 0",
				:config="{ compact: true }",
				@click="toggleSpacing(accessibility_toggle.decrease)"
			)
			VEcoButton(
				label=":ri-add-line:",
				:disabled="spacing === 2",
				:config="{ compact: true }",
				@click="toggleSpacing(accessibility_toggle.increase)"
			)
		.accessibility__group
			VEcoIcon.accessibility__group--icon(type="ri-line-height")
			VEcoButton(
				label=":ri-subtract-line:",
				:disabled="height === 0",
				:config="{ compact: true }",
				@click="toggleHeight(accessibility_toggle.decrease)"
			)
			VEcoButton(
				label=":ri-add-line:",
				:disabled="height === 2",
				:config="{ compact: true }",
				@click="toggleHeight(accessibility_toggle.increase)"
			)
		.accessibility__group
			VEcoIcon.accessibility__group--icon(type="ri-contrast-drop-2-line")
			VEcoButton(
				label=":ri-subtract-line:",
				:disabled="saturation === 0",
				:config="{ compact: true }",
				@click="toggleSaturation(accessibility_toggle.decrease)"
			)
			VEcoButton(
				label=":ri-add-line:",
				:disabled="saturation === 2",
				:config="{ compact: true }",
				@click="toggleSaturation(accessibility_toggle.increase)"
			)
		VEcoButton(
			label="Reset :ri-close-circle-line:",
			:config="{ theme: 'critical' }",
			@click="reset"
		)
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import {
	accessibility_toggles,
	accessibility_toggle,
	select_config,
} from "@/plugin/utils/types.interface";
import config from "@/plugin/utils/defaults/components/select.config";
import VEcoLink from "@/plugin/components/action/link.vue";
import VEcoButton from "@/plugin/components/action/button.vue";
import VEcoIcon from "@/plugin/components/common/icon.vue";

export default defineComponent({
	name: "Accessibility",
	props: {
		config: {
			type: Object as PropType<select_config>,
			default: () => config,
		},
	},
	components: {
		VEcoLink,
		VEcoButton,
		VEcoIcon,
	},
	computed: {
		settings(): select_config {
			return Object.assign({ ...config }, this.config);
		},
	},
	data() {
		return {
			accessibility_toggle,
			open: false as boolean,
			size: 0 as number,
			spacing: 0 as number,
			height: 0 as number,
			saturation: 1 as number,
		};
	},
	methods: {
		toggle(): void {
			this.open = !this.open;
		},
		toggleSize(option: accessibility_toggles): void {
			this.$ecosphere.accessibility.toggleSize(option);
			this.sync();
		},
		toggleSpacing(option: accessibility_toggles): void {
			this.$ecosphere.accessibility.toggleSpacing(option);
			this.sync();
		},
		toggleHeight(option: accessibility_toggles): void {
			this.$ecosphere.accessibility.toggleHeight(option);
			this.sync();
		},
		toggleSaturation(option: accessibility_toggles): void {
			this.$ecosphere.accessibility.toggleSaturation(option);
			this.sync();
		},
		sync() {
			this.size = this.$ecosphere.accessibility.size;
			this.spacing = this.$ecosphere.accessibility.spacing;
			this.height = this.$ecosphere.accessibility.height;
			this.saturation = this.$ecosphere.accessibility.saturation;
		},
		reset() {
			this.$ecosphere.accessibility.reset();
			this.sync();
		},
	},
	mounted() {
		this.sync();
	},
});
</script>

<style lang="scss" scoped>
.accessibility {
	user-select: none;
	position: relative;

	&__label {
		display: flex;
		align-items: center;
		column-gap: $spacer-0-25;
		@include hover-color;
		width: fit-content;
		color: $color-contrast;

		&--hue {
			color: $color-hue;
		}
	}

	&__content {
		position: absolute;
		margin-top: $spacer-0-25;
		border-radius: $border-radius-standard;
		padding: $spacer-0-25 $spacer-0-375;
		z-index: $z-index-dropdown;
		white-space: nowrap;
		@include create-grid(1, column);

		&--contain {
			width: 100%;
			overflow: hidden;
		}

		&--flow-right {
			left: 0;
		}

		&--flow-left {
			right: 0;
		}

		&--outline {
			border: 1px solid $color-helper-grey;
		}

		&--theme-auto {
			@include apply-theme(auto);
		}

		&--theme-light {
			@include apply-theme(light);
		}

		&--theme-dark {
			@include apply-theme(dark);
		}

		&--theme-invert {
			@include apply-theme(invert);
		}
	}

	&__group {
		@include create-grid(3, column, $spacer-0-375);
		align-items: center;

		&--icon {
			font-size: $spacer-1;
		}
	}
}
</style>
