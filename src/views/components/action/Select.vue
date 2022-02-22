<template lang="pug">
.content
	v-eco-header(:label="$t('headers.select')", :type="2")

	v-eco-header(:label="$t('keywords.default')", :type="6")
	.showcase
		v-eco-select(
			label="Select language :ri-arrow-down-line:",
			:options="[ { label: 'English', value: 'en' }, { label: 'Español', value: 'es' }, ]",
			:config="{ flow: 'right', contain: false, outline: true, center: false, hue: true }"
		)

	v-eco-header(:label="$t('keywords.variants')", :type="6")
	.showcase
		v-eco-select(
			label="No Outline :ri-arrow-down-s-line:",
			:options="[ { label: ':ri-emotion-laugh-line: I like it!', value: 'yes' }, { label: ':ri-emotion-sad-line: Not so cool', value: 'no' }, ]",
			:config="{ flow: 'right', contain: false, outline: false, center: false, hue: true }"
		)
		v-eco-select(
			label="No Hue :ri-arrow-down-s-line:",
			:options="[ { label: ':ri-emotion-laugh-line: I like it!', value: 'yes' }, { label: ':ri-emotion-sad-line: Not so cool', value: 'no' }, ]",
			:config="{ flow: 'right', contain: false, outline: true, center: false, hue: false }"
		)
		v-eco-select(
			label="Flow left :ri-arrow-down-s-line:",
			:options="[ { label: ':ri-emotion-laugh-line: I like it!', value: 'yes' }, { label: ':ri-emotion-sad-line: Not so cool', value: 'no' }, ]",
			:config="{ flow: 'left', contain: false, outline: true, center: false, hue: true }"
		)
		v-eco-select(
			label="Contained :ri-arrow-down-s-line:",
			:options="[ { label: ':ri-emotion-laugh-line: I like it!', value: 'yes' }, { label: ':ri-emotion-sad-line: Not so cool', value: 'no' }, ]",
			:config="{ flow: 'left', contain: true, outline: true, center: false, hue: true }"
		)
		v-eco-select(
			label="Inverted Theme :ri-arrow-down-s-line:",
			:options="[ { label: ':ri-emotion-laugh-line: I like it!', value: 'yes' }, { label: ':ri-emotion-sad-line: Not so cool', value: 'no' }, ]",
			:config="{ flow: 'left', contain: true, outline: true, center: false, hue: true, theme: 'invert' }"
		)

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/components/action/select/en.md";
import content_zh from "@/assets/docs/components/action/select/zh.md";

export default defineComponent({
	name: "Select",
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
