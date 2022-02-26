<template lang="pug">
.content
	PageHeader(:label="$t('headers.sidebar')")

	v-eco-header(:label="$t('keywords.default')", :type="5")
	v-eco-sidebar(
		:options="[ { label: 'Home', value: '/' }, { label: 'Components', children: [{ label: 'Sidebar', value: '/components/layout/sidebar' }] }, ]"
	)

	v-eco-header(:label="$t('keywords.themed')", :type="5")
	.showcase--grid
		v-eco-sidebar(
			:options="[ { label: 'Home', value: '/' }, { label: 'Components', children: [{ label: 'Sidebar', value: '/components/layout/sidebar' }] }, ]",
			theme="invert"
		)
		v-eco-sidebar(
			:options="[ { label: 'Home', value: '/' }, { label: 'Components', children: [{ label: 'Sidebar', value: '/components/layout/sidebar' }] }, ]",
			theme="dark"
		)

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/components/layout/sidebar/en.md";
import content_zh from "@/assets/docs/components/layout/sidebar/zh.md";
import PageHeader from "@/components/common/PageHeader.vue";

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
	components: {
		PageHeader,
	},
});
</script>
