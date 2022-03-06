<template lang="pug">
.content
	PageHeader(:label="$t('headers.toggle')", :events="false")

	v-eco-header(:label="$t('keywords.default')", :type="5")
	.showcase
		v-eco-toggle(
			:options="[ { label: 'Yesterday', value: 'yesterday' }, { label: 'Today', value: 'today' }, { label: 'Tomorrow', value: 'tomorrow' }, ]",
			theme="auto",
			hue="hue",
			:defaultIndex="1"
		)

	v-eco-header(:label="$t('keywords.themed')", :type="5")
	.showcase
		v-eco-toggle(
			:options="[ { label: 'Home :ri-home-line:', value: 'none' }, { label: 'Settings :ri-settings-line:', value: 'settings' }, ]",
			theme="auto",
			hue="critical",
			:defaultIndex="0"
		)
		v-eco-toggle(
			:options="[ { label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }, { label: 'Option 3', value: '3' }, ]",
			theme="invert",
			hue="success"
		)

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/components/action/toggle/en.md";
import content_zh from "@/assets/docs/components/action/toggle/zh.md";
import PageHeader from "@/components/common/PageHeader.vue";

export default defineComponent({
	name: "Toggle",
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
