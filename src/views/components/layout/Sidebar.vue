<template lang="pug">
.content
	v-eco-header(:label="$t('headers.sidebar')", :type="2")

	v-eco-header(:label="$t('keywords.default')", :type="6")
	v-eco-sidebar(
		:options="[ { label: 'Home', value: '/' }, { label: 'Components', children: [{ label: 'Sidebar', value: '/components/layout/sidebar' }] }, ]",
		:config="{ theme: 'auto' }"
	)

	v-eco-header(:label="$t('keywords.themed')", :type="6")
	.showcase--grid
		v-eco-sidebar(
			:options="[ { label: 'Home', value: '/' }, { label: 'Components', children: [{ label: 'Sidebar', value: '/components/layout/sidebar' }] }, ]",
			:config="{ theme: 'invert' }"
		)
		v-eco-sidebar(
			:options="[ { label: 'Home', value: '/' }, { label: 'Components', children: [{ label: 'Sidebar', value: '/components/layout/sidebar' }] }, ]",
			:config="{ theme: 'dark' }"
		)

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/components/layout/sidebar/en.md";
import content_zh from "@/assets/docs/components/layout/sidebar/zh.md";

export default defineComponent({
	name: "Sidebar",
	data() {
		return { locale };
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
});
</script>
