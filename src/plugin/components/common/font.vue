<template lang="pug">
p.font(:class="[`font--${type}`, { 'font--no-margin': !margin }]")
	VEcoText(:label="label")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import VEcoText from "@/plugin/components/common/text.vue";
import { font_type } from "@/plugin/utils/types.interface";

export default defineComponent({
	name: "Font",
	props: {
		label: {
			type: String as PropType<font_type>,
			required: true,
		},
		type: {
			type: String as PropType<string>,
			default: "light",
		},
		margin: {
			type: Boolean as PropType<boolean>,
			default: true,
		},
	},
	components: {
		VEcoText,
	},
});
</script>

<style lang="scss" scoped>
.font {
	&--light {
		@include font-light;
	}

	&--emphasis {
		@include font-emphasis;
	}

	&--italic {
		@include font-italic;
	}

	&--serif {
		@include font-serif;
	}

	&--regular {
		@include font-regular;
	}

	&--sidenote {
		@include font-sidenote;
	}

	&--code {
		@include font-code;
	}

	&--no-margin {
		margin: 0;
	}
}
</style>
