<template lang="pug">
.dot(:class="[`dot--theme-${hue}`, `dot--${size}`]")
</template>

<script lang="ts">
import { dot_hue, dot_size } from "@/plugin/utils/types.interface";
import { defineComponent, PropType } from "vue";

export default defineComponent({
	name: "Dot",
	props: {
		hue: {
			type: String as PropType<dot_hue>,
			default: "hue",
		},
		size: {
			type: String as PropType<dot_size>,
			default: "tiny",
		},
	},
});
</script>

<style lang="scss" scoped>
.dot {
	border-radius: 50%;
	background: transparent;
	@include use-theme;

	&--tiny {
		height: $spacer-0-375;
		width: $spacer-0-375;
	}

	&--small {
		height: $spacer-0-5;
		width: $spacer-0-5;
	}

	&--medium {
		height: $spacer-0-75;
		width: $spacer-0-75;
	}

	&--large {
		height: $spacer-1;
		width: $spacer-1;
	}
}
</style>
