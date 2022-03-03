<template lang="pug">
.tag(:class="[`tag--theme-${theme}`, `tag--size-${size}`]")
	VEcoText(:label="label")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import VEcoText from "@/plugin/components/common/text.vue";

export default defineComponent({
	name: "Tag",
	props: {
		label: {
			type: String as PropType<string>,
			required: true,
		},
		theme: {
			type: String as PropType<string>,
			default: "auto",
		},
		size: {
			type: String as PropType<"small" | "regular">,
			default: "small",
		},
	},
	components: {
		VEcoText,
	},
});
</script>

<style lang="scss" scoped>
.tag {
	display: inline-block;
	border-radius: $border-radius-standard;
	padding: 0 $spacer-0-375;
	cursor: default;
	user-select: none;
	@include use-theme;

	&--size-small {
		@include font-sidenote;
		margin: 0;
	}

	&--size-regular {
		@include font-light;
		margin: 0;
	}
}
</style>
