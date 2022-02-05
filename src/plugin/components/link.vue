<template lang="pug">
a.link(:class="[disabled ? 'link--disabled' : '']")
	v-eco-icon.link__icon(
		v-if="icon && iconDirection === 'left'",
		:type="icon"
	)
	span.link__label {{ label }}
	v-eco-icon.link__icon(v-if="icon && iconDirection === 'right'", :type="icon")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { link_icon_direction } from "@/plugin/utils/types.interface";

export default defineComponent({
	name: "Link",
	props: {
		label: {
			type: String as PropType<string>,
			default: "",
		},
		icon: {
			type: [String, Boolean] as PropType<string | boolean>,
			default: false,
		},
		iconDirection: {
			type: String as PropType<link_icon_direction>,
			default: "right",
		},
		disabled: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
	},
});
</script>

<style lang="scss" scoped>
.link {
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	column-gap: $spacer-0-25;
	text-decoration: none;
	color: $color-contrast;
	@include hover-color;
	-webkit-tap-highlight-color: transparent;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	max-width: 100%;

	&__icon {
		display: block;
	}

	&__label {
		@include font-light;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	&--disabled {
		color: $color-helper-grey;
		cursor: default;
		pointer-events: none;
	}
}
</style>
