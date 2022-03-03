<template lang="pug">
.content
	PageHeader(:label="$t('headers.button')")

	v-eco-header(:label="$t('keywords.default')", :type="5")
	.showcase
		v-eco-button(:label="$t('keywords.default')")
		v-eco-button(:label="$t('keywords.disabled')", :disabled="true")
		v-eco-button(label="Start Playing :ri-play-line:")
		v-eco-button(label=":ri-play-line:", :compact="true")

	v-eco-header(:label="$t('keywords.themed')", :type="5")
	.showcase
		v-eco-button(:label="$t('keywords.light')", theme="light")
		v-eco-button(:label="$t('keywords.dark')", theme="dark")
		v-eco-button(:label="$t('keywords.inverted')", theme="invert")
		v-eco-button(:label="$t('keywords.hue')", theme="hue")
		v-eco-button(:label="$t('keywords.primary')", theme="primary")
		v-eco-button(:label="$t('keywords.secondary')", theme="secondary")
		v-eco-button(:label="$t('keywords.critical')", theme="critical")
		v-eco-button(:label="$t('keywords.warning')", theme="warning")
		v-eco-button(:label="$t('keywords.success')", theme="success")
		v-eco-button(:label="$t('keywords.transparent')", theme="transparent")

	v-eco-header(:label="$t('keywords.no_outline')", :type="5")
	.showcase
		v-eco-button(
			:label="$t('keywords.light')",
			theme="light",
			:outline="false"
		)
		v-eco-button(:label="$t('keywords.dark')", theme="dark", :outline="false")

	v-eco-header(:label="$t('keywords.with_icon')", :type="5")
	.showcase
		v-eco-button(
			:label="`${$t('keywords.light')} :ri-sun-line:`",
			theme="light"
		)
		v-eco-button(:label="`${$t('keywords.dark')} :ri-moon-line:`", theme="dark")
		v-eco-button(
			:label="`${$t('keywords.inverted')} :ri-contrast-line:`",
			theme="invert"
		)
		v-eco-button(
			:label="`${$t('keywords.brand')} :ri-building-2-line:`",
			theme="hue"
		)
		v-eco-button(
			:label="`${$t('keywords.critical')} :ri-fire-line:`",
			theme="critical"
		)
		v-eco-button(
			:label="`${$t('keywords.warning')} :ri-alarm-warning-line:`",
			theme="warning"
		)
		v-eco-button(
			:label="`${$t('keywords.success')} :ri-check-double-line:`",
			theme="success"
		)
		v-eco-button(
			:label="`${$t('keywords.transparent')} :ri-eye-2-line:`",
			theme="transparent"
		)

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/components/action/button/en.md";
import content_zh from "@/assets/docs/components/action/button/zh.md";
import PageHeader from "@/components/common/PageHeader.vue";

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
	components: {
		PageHeader,
	},
});
</script>
