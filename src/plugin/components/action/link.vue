<template lang="pug">
a.link
	VEcoText(:label="label")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import VEcoText from "@/plugin/components/common/text.vue";

export default defineComponent({
	name: "Link",
	props: {
		label: {
			type: String as PropType<string>,
			default: "",
			required: true,
		},
	},
	components: {
		VEcoText,
	},
});
</script>

<style lang="scss" scoped>
.link {
	color: $color-hue;
	@include hover-color;
}
</style>
