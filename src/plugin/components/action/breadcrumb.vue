<template lang="pug">
.breadcrumb
	.breadcrumb__item(v-for="(option, index) in options")
		VEcoText.breadcrumb__divider(v-if="index > 0", :label="divider") 
		VEcoSelect(
			v-if="option.children",
			:options="option.children",
			:label="option.label",
			:config="{ hue: index === options.length - 1 ? true : false }"
		)
		VEcoLink(
			v-else,
			:label="option.label",
			:hue="index === options.length - 1 ? 'hue' : ''",
			@click="$ecosphere.handlers.navigate(option.value)"
		)
</template>

<script lang="ts">
import { select_option } from "@/plugin/utils/types.interface";
import { defineComponent, PropType } from "vue";
import VEcoText from "@/plugin/components/common/text.vue";
import VEcoLink from "@/plugin/components/action/link.vue";
import VEcoSelect from "@/plugin/components/action/select.vue";

export default defineComponent({
	name: "Breadcrumb",
	props: {
		options: {
			type: Object as PropType<select_option[]>,
			required: true,
		},
		divider: {
			type: String as PropType<string>,
			default: ":ri-arrow-right-s-line:",
		},
	},
	components: {
		VEcoLink,
		VEcoText,
		VEcoSelect,
	},
});
</script>

<style lang="scss" scoped>
.breadcrumb {
	display: flex;
	align-items: center;
	column-gap: $spacer-0-25;

	&__divider {
		color: $color-helper-grey;
	}

	&__item {
		user-select: none;
		display: flex;
		align-items: center;
		column-gap: $spacer-0-25;
	}
}
</style>
