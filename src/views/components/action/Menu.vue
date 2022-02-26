<template lang="pug">
.content
	PageHeader(:label="$t('headers.menu')")

	v-eco-header(:label="$t('keywords.default')", :type="5")
	.showcase__menu
		v-eco-menu(
			:options="[ { label: 'Home', value: '/' }, { label: 'Installation', value: '/guide/installation' }, { label: 'Components', children: [{ label: 'Disabled' }] }, { label: 'Active', value: '/components/action/menu' }, ]"
		)

	v-eco-header(:label="$t('keywords.themed')", :type="5")
	.showcase--grid
		v-eco-menu(
			:options="[{ label: 'Theme', children: [{ label: 'Automatic' }, { label: 'Light' }, { label: 'Dark' }, { label: 'Inverted', value: '/components/action/menu' }] }]",
			theme="invert"
		)
		v-eco-menu(
			:options="[{ label: 'Theme', children: [{ label: 'Automatic' }, { label: 'Light' }, { label: 'Dark', value: '/components/action/menu' }, { label: 'Inverted' }] }]",
			theme="dark"
		)

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/components/action/menu/en.md";
import content_zh from "@/assets/docs/components/action/menu/zh.md";
import PageHeader from "@/components/common/PageHeader.vue";

export default defineComponent({
	name: "Menu",
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
