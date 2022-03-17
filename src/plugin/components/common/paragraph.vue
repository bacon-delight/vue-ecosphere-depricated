<template lang="pug">
p.paragraph(
	:class="[`paragraph--font-${type}`, { 'paragraph--no-margin': !margin }]"
)
	VEcoText(:label="label")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import VEcoText from "@/plugin/components/common/text.vue";
import { paragraph_type } from "@/plugin/utils/types.interface";

export default defineComponent({
	name: "Paragraph",
	props: {
		label: {
			type: String as PropType<paragraph_type>,
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
.paragraph {
	@include use-fonts;

	&--no-margin {
		margin: 0;
	}
}
</style>
