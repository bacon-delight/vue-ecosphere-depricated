<template lang="pug">
.dot(:class="`dot--${hue}`")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
	name: "Dot",
	props: {
		hue: {
			type: String as PropType<string>,
			default: "",
		},
	},
});
</script>

<style lang="scss" scoped>
.dot {
	height: $spacer-0-375;
	width: $spacer-0-375;
	border-radius: 50%;
	background: transparent;

	&--information {
		background: $color-indicator-information;
	}
}
</style>
