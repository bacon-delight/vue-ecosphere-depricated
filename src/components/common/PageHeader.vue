<template lang="pug">
.page-header
	.page-header__status(v-if="status")
		v-eco-tag(:label="status", theme="critical", size="regular")

	.page-header__header
		v-eco-header(:label="label", :type="2", :margin="false")

	.page-header__links
		v-eco-link(v-if="usage", label="Usage", href="#usage")
		v-eco-link(v-if="api", label="API", href="#api")
		v-eco-link(v-if="events", label="Events", href="#events")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
	name: "PageHeader",
	props: {
		label: {
			type: String as PropType<string>,
			required: true,
		},
		usage: {
			type: Boolean as PropType<boolean>,
			default: true,
		},
		api: {
			type: Boolean as PropType<boolean>,
			default: true,
		},
		events: {
			type: Boolean as PropType<boolean>,
			default: true,
		},
		status: {
			type: String as PropType<string>,
			default: "",
		},
	},
});
</script>

<style lang="scss" scoped>
.page-header {
	display: block;

	&__links {
		display: flex;
		column-gap: $spacer-0-5;

		> * {
			&:not(:first-child) {
				&::before {
					content: "|";
					margin-right: $spacer-0-5;
					color: $color-contrast-faded;
					opacity: 0.2;
				}
			}
		}
	}

	&__status {
		margin-top: $spacer-0-5;
	}
}
</style>
