<template lang="pug">
.accessibility
	//- Label
	.accessibility__label(@click="toggle")
		VEcoLink.accessibility__label.accessibility__label--text(
			:label="label",
			:class="{ 'accessibility__label--hue': settings.hue }"
		)
		VEcoLink.accessibility__label.accessibility__label--text(
			v-if="settings.indicator",
			:label="open ? ':ri-arrow-up-s-line:' : ':ri-arrow-down-s-line:'",
			:class="{ 'accessibility__label--hue': settings.hue }"
		)

	//- Drop Area
	.accessibility__content(
		v-if="open",
		@mouseleave="toggle",
		:class="[`accessibility__content--flow-${settings.flow}`, settings.outline ? 'accessibility__content--outline' : '', `accessibility__content--theme-${settings.theme}`]"
	)
		.accessibility__group(v-if="settings.size")
			VEcoIcon.accessibility__group--icon(type="ri-font-size-2")
			VEcoButton(
				label=":ri-subtract-line:",
				:disabled="size === 0",
				:compact="true",
				:theme="settings.theme",
				@click="toggleSize(accessibility_toggle.decrease)"
			)
			VEcoButton(
				label=":ri-add-line:",
				:disabled="size === 2",
				:compact="true",
				:theme="settings.theme",
				@click="toggleSize(accessibility_toggle.increase)"
			)
		.accessibility__group(v-if="settings.spacing")
			VEcoIcon.accessibility__group--icon(type="ri-text-spacing")
			VEcoButton(
				label=":ri-subtract-line:",
				:disabled="spacing === 0",
				:compact="true",
				:theme="settings.theme",
				@click="toggleSpacing(accessibility_toggle.decrease)"
			)
			VEcoButton(
				label=":ri-add-line:",
				:disabled="spacing === 2",
				:compact="true",
				:theme="settings.theme",
				@click="toggleSpacing(accessibility_toggle.increase)"
			)
		.accessibility__group(v-if="settings.height")
			VEcoIcon.accessibility__group--icon(type="ri-line-height")
			VEcoButton(
				label=":ri-subtract-line:",
				:disabled="height === 0",
				:compact="true",
				:theme="settings.theme",
				@click="toggleHeight(accessibility_toggle.decrease)"
			)
			VEcoButton(
				label=":ri-add-line:",
				:disabled="height === 2",
				:compact="true",
				:theme="settings.theme",
				@click="toggleHeight(accessibility_toggle.increase)"
			)
		.accessibility__group(v-if="settings.saturation")
			VEcoIcon.accessibility__group--icon(type="ri-contrast-drop-2-line")
			VEcoButton(
				label=":ri-subtract-line:",
				:disabled="saturation === 0",
				:compact="true",
				:theme="settings.theme",
				@click="toggleSaturation(accessibility_toggle.decrease)"
			)
			VEcoButton(
				label=":ri-add-line:",
				:disabled="saturation === 2",
				:compact="true",
				:theme="settings.theme",
				@click="toggleSaturation(accessibility_toggle.increase)"
			)
		VEcoButton(
			v-if="settings.reset",
			:label="resetLabel",
			theme="critical",
			@click="reset"
		)
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import {
	accessibility_toggles,
	accessibility_toggle,
	accessibility_config,
} from "@/plugin/utils/types.interface";
import config from "@/plugin/utils/defaults/components/accessibility.config";
import VEcoLink from "@/plugin/components/action/link.vue";
import VEcoButton from "@/plugin/components/action/button.vue";
import VEcoIcon from "@/plugin/components/common/icon.vue";

export default defineComponent({
	name: "Accessibility",
	props: {
		label: {
			type: String as PropType<string>,
			default: ":ri-service-line:",
		},
		resetLabel: {
			type: String as PropType<string>,
			default: config.resetLabel,
		},
		config: {
			type: Object as PropType<accessibility_config>,
			default: () => config,
		},
	},
	components: {
		VEcoLink,
		VEcoButton,
		VEcoIcon,
	},
	computed: {
		settings(): accessibility_config {
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
		@include select-label;
	}

	&__content {
		@include dropdown-content-area;
		@include create-grid(1, column, $spacer-0-25);
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
