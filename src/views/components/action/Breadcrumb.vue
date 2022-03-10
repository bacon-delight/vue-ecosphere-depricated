<template lang="pug">
.content
	PageHeader(:label="$t('headers.breadcrumb')")

	v-eco-header(:label="$t('keywords.examples')", :type="5")
	.showcase
		v-eco-breadcrumb(
			:options="[ { label: 'Components', value: '/components/action/button' }, { label: 'Breadcrumb', value: '/components/action/breadcrumb' }, ]"
		)
		v-eco-breadcrumb(:options="options")
		v-eco-breadcrumb(:options="options", divider="/")

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/components/action/breadcrumb/en.md";
import content_zh from "@/assets/docs/components/action/breadcrumb/zh.md";
import PageHeader from "@/components/common/PageHeader.vue";

export default defineComponent({
	name: "Breadcrumb",
	data() {
		return {
			locale,
			options: [
				{
					label: "Home",
					value: "/",
				},
				{
					label: "Components",
					children: [
						{
							label: "Design",
							value: "/design/colours",
						},
						{
							label: "Guide",
							value: "/guide/installation",
						},
					],
				},
				{
					label: "Action",
					value: "/components/action/accessibility",
				},
				{
					label: "Breadcrumb",
					value: "/components/action/breadcrumb",
				},
			],
		};
	},
	computed: {
		content() {
			const locale = this.locale(this.$i18n);
			if (locale === "zh") {
				return content_zh;
			} else {
				return content_en;
			}
		},
	},
	components: {
		PageHeader,
	},
});
</script>
