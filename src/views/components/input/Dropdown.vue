<template lang="pug">
.content
	v-eco-header(:label="$t('headers.dropdown')", :type="2")

	v-eco-header(:label="$t('keywords.default')", :type="6")
	.showcase--grid
		v-eco-dropdown(
			label="Select language",
			:options="[ { label: 'English', value: 'en' }, { label: '中文', value: 'zh' }, { label: '日本語', value: 'ja' }, { label: '한국어', value: 'ko' }, ]",
			placeholder="Select an option",
			:config="{ flow: 'right', contain: true, outline: true, theme: 'auto' }"
		)

	v-eco-header(:label="$t('keywords.themed')", :type="6")
	.showcase--grid
		v-eco-dropdown(
			label="Select a theme to see the difference",
			:options="[ { label: 'Automatic', value: 'auto' }, { label: 'Light', value: 'light' }, { label: 'Dark', value: 'dark' }, { label: 'Invert', value: 'invert' }, ]",
			placeholder="Select an option",
			:config="{ flow: 'right', contain: true, outline: true, theme: theme }",
			:defaultValue="theme",
			@change="theme = $event"
		)
		v-eco-dropdown(
			label=":ri-building-2-line: What's your favourite city?",
			:options="[ { label: 'Bangalore', value: 'bangalore' }, { label: 'Beijing', value: 'beijing' }, { label: 'Chongqing', value: 'chongqing' }, { label: 'Harbin', value: 'harbin' }, { label: 'Helsinki', value: 'helsinki' }, { label: 'Oslo', value: 'oslo' }, ]",
			placeholder=":ri-heart-line: Select an option",
			:config="{ flow: 'right', contain: true, outline: true, theme: 'invert' }"
		)

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/components/input/dropdown/en.md";
import content_zh from "@/assets/docs/components/input/dropdown/zh.md";

export default defineComponent({
	name: "Dropdown",
	data() {
		return {
			locale,
			theme: "auto",
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
});
</script>
