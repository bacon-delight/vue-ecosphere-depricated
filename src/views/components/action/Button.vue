<template lang="pug">
.content
	v-eco-header(:label="$t('headers.button')", :type="2")

	v-eco-header(:label="$t('keywords.default')", :type="6")
	.showcase
		v-eco-button(:label="$t('keywords.default')")

	v-eco-header(:label="$t('keywords.themed')", :type="6")
	.showcase
		v-eco-button(:label="$t('keywords.light')", :config="{ theme: 'light' }")
		v-eco-button(:label="$t('keywords.dark')", :config="{ theme: 'dark' }")
		v-eco-button(:label="$t('keywords.inverted')", :config="{ theme: 'invert' }")
		v-eco-button(:label="$t('keywords.brand')", :config="{ theme: 'hue' }")
		v-eco-button(
			:label="$t('keywords.critical')",
			:config="{ theme: 'critical' }"
		)
		v-eco-button(:label="$t('keywords.warning')", :config="{ theme: 'warning' }")
		v-eco-button(:label="$t('keywords.success')", :config="{ theme: 'success' }")
		v-eco-button(
			:label="$t('keywords.transparent')",
			:config="{ theme: 'transparent' }"
		)

	v-eco-header(:label="$t('keywords.no_outline')", :type="6")
	.showcase
		v-eco-button(
			:label="$t('keywords.light')",
			:config="{ theme: 'light', outline: false }"
		)
		v-eco-button(
			:label="$t('keywords.dark')",
			:config="{ theme: 'dark', outline: false }"
		)

	v-eco-header(:label="$t('keywords.with_icon')", :type="6")
	.showcase
		v-eco-button(
			:label="`${$t('keywords.light')} :ri-sun-line:`",
			:config="{ theme: 'light' }"
		)
		v-eco-button(
			:label="`${$t('keywords.dark')} :ri-moon-line:`",
			:config="{ theme: 'dark' }"
		)
		v-eco-button(
			:label="`${$t('keywords.inverted')} :ri-contrast-line:`",
			:config="{ theme: 'invert' }"
		)
		v-eco-button(
			:label="`${$t('keywords.brand')} :ri-building-2-line:`",
			:config="{ theme: 'hue' }"
		)
		v-eco-button(
			:label="`${$t('keywords.critical')} :ri-fire-line:`",
			:config="{ theme: 'critical' }"
		)
		v-eco-button(
			:label="`${$t('keywords.warning')} :ri-alarm-warning-line:`",
			:config="{ theme: 'warning' }"
		)
		v-eco-button(
			:label="`${$t('keywords.success')} :ri-check-double-line:`",
			:config="{ theme: 'success' }"
		)
		v-eco-button(
			:label="`${$t('keywords.transparent')} :ri-eye-2-line:`",
			:config="{ theme: 'transparent' }"
		)

	v-eco-header(:label="$t('keywords.examples')", :type="6")
	.showcase
		v-eco-button(
			label="Click me!",
			:config="{ theme: 'auto', outline: true }"
		)
		v-eco-button(label="Start Playing :ri-play-line:")
		v-eco-button(label=":ri-arrow-left-line: Return")

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/components/action/button/en.md";
import content_zh from "@/assets/docs/components/action/button/zh.md";

export default defineComponent({
	name: "Button",
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
