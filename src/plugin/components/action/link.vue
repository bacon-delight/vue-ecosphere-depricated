<template lang="pug">
a.link(:class="[`link--color-${hue}`]")
	VEcoText(:label="label")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import VEcoText from "@/plugin/components/common/text.vue";
import { hues } from "@/plugin/utils/types.interface";

export default defineComponent({
	name: "Link",
	props: {
		label: {
			type: String as PropType<string>,
			default: "",
			required: true,
		},
		hue: {
			type: String as PropType<hues>,
			default: "hue",
		},
	},
	components: {
		VEcoText,
	},
});
</script>

<style lang="scss" scoped>
.link {
	width: fit-content;
	text-decoration: none;
	cursor: pointer;
	@include use-color;
	@include hover-color;
}
</style>
